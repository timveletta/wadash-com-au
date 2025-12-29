import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./services",
    schema: z.object({
      title: z.string(),
    }),
  }),
});

export const collections = { services };
