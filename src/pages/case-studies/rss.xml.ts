import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
  const caseStudies = await getCollection('case-studies')

  return rss({
    title: 'BlueAlpha Case Studies',
    description:
      "Success stories from our clients - See how we've helped brands achieve extraordinary growth through data-driven performance marketing.",
    site: context.site || 'https://www.bluealpha.ai',
    items: caseStudies.map((study) => ({
      title: study.data.title,
      pubDate: study.data.publishDate,
      description: study.data.description,
      link: `/case-studies/${study.id}`,
      categories: [study.data.industry, ...study.data.services],
      content: `<p>${study.data.description}</p><h2>Challenge</h2><p>${study.data.challenge}</p><h2>Solution</h2><p>${study.data.solution}</p>`,
      customData: `
        <company>${study.data.company}</company>
        <featured>${study.data.featured}</featured>
      `
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/pretty-feed-v3.xsl'
  })
}
