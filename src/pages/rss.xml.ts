import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import { METADATA, SITE } from 'astrowind:config';

export const prerender = true;

type GardenEntry = CollectionEntry<'log' | 'notes' | 'articles' | 'maps'>;

const SOURCES = [
  { collection: 'log' as const, path: '/log' },
  { collection: 'notes' as const, path: '/notes' },
  { collection: 'articles' as const, path: '/articles' },
  { collection: 'maps' as const, path: '/maps' },
];

/** First body paragraph, stripped of markdown, as a description fallback. */
const summaryFromBody = (body = '') => {
  const paragraph = body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith('#') && !block.startsWith('!') && !block.startsWith('---'));
  if (!paragraph) return '';

  return paragraph
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 240);
};

const describe = (entry: GardenEntry) => {
  const data = entry.data as Record<string, unknown>;
  const explicit = data.summary ?? data.excerpt ?? data.description;
  return typeof explicit === 'string' && explicit ? explicit : summaryFromBody(entry.body);
};

export async function GET(context: { site: URL | undefined }) {
  const site = context.site?.toString() ?? SITE.site ?? 'https://mikes.blog';
  const items: { title?: string; pubDate: Date; description: string; link: string; categories?: string[] }[] = [];

  for (const { collection, path } of SOURCES) {
    const entries = await getCollection(collection, ({ data }) => !data.draft);
    for (const entry of entries) {
      const published = entry.data.publishDate;
      if (!published) continue;
      items.push({
        title: entry.data.title,
        pubDate: published,
        description: describe(entry),
        link: `${path}/${entry.id}`,
        categories: entry.data.tags,
      });
    }
  }

  items.sort((left, right) => right.pubDate.valueOf() - left.pubDate.valueOf());

  return rss({
    title: SITE.name,
    description: METADATA.description ?? '',
    site,
    items,
    customData: '<language>en</language>',
  });
}
