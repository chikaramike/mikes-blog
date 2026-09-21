import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const gardenDocumentDefinition = () =>
  z.object({
    title: z.string(),
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  });

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    /** Alternative text for the cover image. Leave empty for decorative stock photos. */
    imageAlt: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const logCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/log' }),
  schema: gardenDocumentDefinition().extend({
    summary: z.string(),
  }),
});

const noteCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/notes' }),
  schema: gardenDocumentDefinition().extend({
    kind: z.enum(['review', 'literature', 'permanent', 'fleeting']),
    stage: z.enum(['seedling', 'budding', 'evergreen']),
  }),
});

const articleCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/articles' }),
  schema: gardenDocumentDefinition().extend({
    excerpt: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    sources: z.array(z.string()),
  }),
});

const mapCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/maps' }),
  schema: gardenDocumentDefinition().extend({
    description: z.string().optional(),
    links: z.array(z.string()).optional(),
  }),
});

export const collections = {
  post: postCollection,
  log: logCollection,
  notes: noteCollection,
  articles: articleCollection,
  maps: mapCollection,
};
