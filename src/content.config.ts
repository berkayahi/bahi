import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    image: z.string(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/settings" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    repo: z.string().url(),
    github: z.string().url(),
    linkedin: z.string().url(),
    nav: z.array(z.object({ label: z.string(), href: z.string() })),
    thoughts_label: z.string(),
    thoughts_heading: z.string(),
    projects_label: z.string(),
    projects_heading: z.string(),
  }),
});

export const collections = { thoughts, projects, pages, settings };
