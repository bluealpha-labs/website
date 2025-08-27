import { tags as articleTags } from '#constants/article.ts'
import { authors } from '#constants/author.ts'
import { departments, locations } from '#constants/career.ts'
import { statuses } from '#constants/content.ts'
import { tags as playbookTags } from '#constants/playbook.ts'
import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.enum(authors),
    tags: z.array(z.enum(articleTags)),
    date: z.date(),
    time: z.number(),
    image: z.string(),
    status: z.enum(statuses)
  })
})

const careers = defineCollection({
  schema: z.object({
    title: z.string(),
    department: z.enum(departments),
    locations: z.array(z.enum(locations)),
    status: z.enum(statuses)
  })
})

const playbooks = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.enum(authors),
    tags: z.array(z.enum(playbookTags)),
    date: z.date(),
    time: z.number(),
    image: z.string(),
    status: z.enum(statuses)
  })
})

export const collections = { articles, careers, playbooks }
