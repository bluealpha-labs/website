import { tags as articleTags } from '#constants/article.ts'
import { authors } from '#constants/author.ts'
import { departments, locations } from '#constants/career.ts'
import { tags as caseStudyTags, companies } from '#constants/case-study.ts'
import { statuses } from '#constants/content.ts'
import { tags as playbookTags } from '#constants/playbook.ts'
import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      author: z.enum(authors),
      date: z.date(),
      time: z.number(),
      category: z.string().optional(),
      tags: z.array(z.enum(articleTags)),
      status: z.enum(statuses)
    })
})

const careers = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      department: z.enum(departments),
      locations: z.array(z.enum(locations)),
      status: z.enum(statuses)
    })
})

const caseStudies = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      author: z.enum(authors),
      company: z.enum(companies),
      testimonial: z.object({
        quote: z.string(),
        author: z.string(),
        title: z.string()
      }),
      date: z.date(),
      time: z.number(),
      tags: z.array(z.enum(caseStudyTags)),
      status: z.enum(statuses)
    })
})

const playbooks = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      author: z.enum(authors),
      date: z.date(),
      time: z.number(),
      category: z.string().optional(),
      tags: z.array(z.enum(playbookTags)),
      status: z.enum(statuses)
    })
})

export const collections = { articles, careers, caseStudies, playbooks }
