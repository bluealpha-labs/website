import { defineCollection, z } from 'astro:content'

const careers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    department: z.enum(['Engineering']),
    locations: z.array(z.enum(['Remote', 'San Francisco'])),
    status: z.enum(['Draft', 'Published']),
    order: z.number()
  })
})

export const collections = { careers }
