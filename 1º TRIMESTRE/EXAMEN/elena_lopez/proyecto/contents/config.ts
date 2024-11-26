import { defineCollection, z } from "astro:content";
// z → zod schema


const personajes = defineCollection({
  schema : (z.object({
    nombre: z.string(),
    hp: z.number(),
    nivel: z.string(),
    habilidad: z.string(),
    fuerza: z.number(),
    img: z.string(),
    descripcion: z.string(),
    valor: z.string()
  })),
});

export const collections = { personajes };