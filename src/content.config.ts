// Describes the shape of every editable file in src/content/.
// If an edit breaks the expected shape (a missing field, a misspelled pillar
// id), the build fails with a message naming the file and the field, so a
// broken edit never reaches the live site.
import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pillarId = z.enum(['neuro', 'math', 'ai']);

/** One YAML file in src/content/ holding a single object. */
function page<T extends z.ZodType>(name: string, schema: T | ((context: SchemaContext) => T)) {
  return defineCollection({
    loader: glob({ pattern: `${name}.yaml`, base: './src/content' }),
    schema,
  });
}

const event = page(
  'event',
  z.object({
    title: z.string(),
    subtitle: z.string(),
    intro: z.string(),
    facts: z.array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() })),
    partners: z
      .object({
        heading: z.string(),
        items: z.array(z.object({ name: z.string(), url: z.url().optional() })),
        note: z.string().optional(),
      })
      .optional(),
    interestForm: z.object({
      url: z.union([z.literal(''), z.url()]),
      label: z.string(),
      pendingLabel: z.string(),
    }),
    callToAction: z.object({ heading: z.string(), text: z.string() }),
    status: z.string(),
  }),
);

const idea = page(
  'idea',
  z.object({
    eyebrow: z.string(),
    heading: z.string(),
    question: z.string(),
    text: z.string(),
    pillars: z
      .array(
        z.object({
          id: pillarId,
          short: z.string(),
          name: z.string(),
          tagline: z.string().optional(),
          topics: z.array(z.string()),
        }),
      )
      .length(3),
    goalsHeading: z.string(),
    goals: z.array(z.object({ name: z.string(), text: z.string() })),
  }),
);

const cycle = page(
  'cycle',
  z.object({
    eyebrow: z.string(),
    heading: z.string(),
    lede: z.string(),
    arrows: z.array(
      z.object({ from: pillarId, to: pillarId, headline: z.string(), text: z.string() }),
    ),
  }),
);

const format = page(
  'format',
  z.object({
    eyebrow: z.string(),
    heading: z.string(),
    lede: z.string(),
    principles: z.array(z.object({ name: z.string(), text: z.string() })),
    clusters: z.array(
      z.object({
        letter: z.string(),
        name: z.string(),
        mode: z.string(),
        detail: z.string(),
        summary: z.string(),
        pointsTitle: z.string().optional(),
        points: z.array(z.object({ label: z.string().optional(), text: z.string() })).default([]),
        // Optional: how the activity is organized, with the island diagram.
        organization: z
          .object({
            title: z.string(),
            intro: z.string(),
            diagram: z.object({
              islands: z.array(z.string()),
              contributors: z.string(),
              mayor: z.string(),
              president: z.string(),
              agents: z.string(),
              product: z.string(),
              steps: z.object({ report: z.string(), coordinate: z.string(), build: z.string() }),
            }),
            roles: z.array(z.object({ label: z.string(), text: z.string() })),
            closing: z.string().optional(),
          })
          .optional(),
      }),
    ),
  }),
);

const schedule = page(
  'schedule',
  z.object({
    eyebrow: z.string(),
    heading: z.string(),
    lede: z.string(),
    blocks: z.array(z.object({ when: z.string(), title: z.string(), items: z.array(z.string()) })),
  }),
);

const outcomes = page(
  'outcomes',
  z.object({
    audience: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      text: z.string(),
      registrationHeading: z.string(),
      registration: z.array(z.string()),
    }),
    deliverables: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      lede: z.string(),
      items: z.array(z.object({ name: z.string(), text: z.string() })),
    }),
  }),
);

const committee = page('committee', ({ image }) =>
  z.object({
    eyebrow: z.string(),
    heading: z.string(),
    members: z.array(
      z.object({
        name: z.string(),
        affiliation: z.string(),
        url: z.url().optional(),
        // A picture in src/assets/people/. The build fails if the file is missing.
        photo: image().optional(),
      }),
    ),
    note: z.string().optional(),
  }),
);

export const collections = { event, idea, cycle, format, schedule, outcomes, committee };
