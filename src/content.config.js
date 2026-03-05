import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./services",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    price: z.string().optional(),
    bullets: z.array(z.string()).optional(),
  }),
});

export const collections = { services };
