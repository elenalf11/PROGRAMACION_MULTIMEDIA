import { defineCollection, z } from "astro:content";

const films = defineCollection({
  schema: z.object({
    title: z.string(),
    director: z.string(),
    year: z.number(),
    runtime: z.number(),
    synopsis: z.string(),
    image: z.string(),
  }),
});

export const collections = { films };