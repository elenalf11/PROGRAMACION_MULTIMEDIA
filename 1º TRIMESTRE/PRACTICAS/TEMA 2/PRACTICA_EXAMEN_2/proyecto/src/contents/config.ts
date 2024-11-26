import { defineCollection, z } from "astro:content";

const books = defineCollection({
	schema: z.object({
		title: z.string(),
		author: z.string(),
		img: z.string(),
		readingTime: z.number(),
		description: z.string(),
		
	}),
});

export const collections = { books };