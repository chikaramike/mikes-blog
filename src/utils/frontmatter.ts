import path from 'node:path';
import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import type { Link } from 'mdast';
import type { RehypePlugin, RemarkPlugin } from '@astrojs/markdown-remark';

// Garden collections that live under src/data/<name> and are routed at /<name>/<slug>.
const GARDEN_COLLECTIONS = ['post', 'log', 'notes', 'articles', 'maps'];
const DATA_ROOT = path.resolve(process.cwd(), 'src/data');

const isRelativeMarkdownLink = (url: string): boolean =>
  !/^([a-z]+:)?\/\//i.test(url) && !url.startsWith('mailto:') && !url.startsWith('/') && /\.mdx?(#.*)?$/.test(url);

/**
 * Rewrites Foam/Obsidian-style relative markdown links (e.g. `../log/entry.md`) into
 * this site's collection routes (e.g. `/log/entry`), so the same links resolve as
 * files in an editor and as pages on the built site.
 */
export const gardenLinksRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    if (!file.dirname) return;

    visit(tree, 'link', (node: Link) => {
      if (!isRelativeMarkdownLink(node.url)) return;

      const [rawPath, hash] = node.url.split('#');
      const absoluteTarget = path.resolve(file.dirname as string, rawPath);
      const relativeToData = path.relative(DATA_ROOT, absoluteTarget);
      const [collection, ...rest] = relativeToData.split(path.sep);

      if (relativeToData.startsWith('..') || !GARDEN_COLLECTIONS.includes(collection) || rest.length === 0) return;

      const slug = rest.join('/').replace(/\.mdx?$/, '');
      node.url = `/${collection}/${slug}${hash ? `#${hash}` : ''}`;
    });
  };
};

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    if (typeof file?.data?.astro?.frontmatter !== 'undefined') {
      file.data.astro.frontmatter.readingTime = readingTime;
    }
  };
};

export const responsiveTablesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    for (let i = 0; i < tree.children.length; i++) {
      const child = tree.children[i];

      if (child.type === 'element' && child.tagName === 'table') {
        tree.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: {
            style: 'overflow:auto',
          },
          children: [child],
        };

        i++;
      }
    }
  };
};
