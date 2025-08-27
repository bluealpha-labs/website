import { ContentCardDescription } from './content-card-description'
import { ContentCardGroup } from './content-card-group'
import { ContentCardImage } from './content-card-image'
import { ContentCardImageLink } from './content-card-image-link'
import { ContentCardMetadata } from './content-card-metadata'
import { ContentCardTagLink } from './content-card-tag-link'
import { ContentCardTitle } from './content-card-title'

export type ContentCard01Props = {
  author: string
  date: string
  href: string
  title: string
  description: string
  tags: { name: string; color: string }[]
}

export function ContentCard01({ author, date, href, title, description, tags }: ContentCard01Props) {
  return (
    <ContentCardGroup
      direction='column'
      gap={4}>
      <ContentCardImageLink>
        <ContentCardImage />
      </ContentCardImageLink>
      <ContentCardGroup
        direction='column'
        gap={6}>
        <ContentCardGroup
          direction='column'
          gap={2}>
          <ContentCardMetadata>
            {author} • {date}
          </ContentCardMetadata>
          <ContentCardGroup
            direction='column'
            gap={1}>
            <ContentCardTitle href={href}>{title}</ContentCardTitle>
            <ContentCardDescription>{description}</ContentCardDescription>
          </ContentCardGroup>
        </ContentCardGroup>
        <ContentCardGroup gap={2}>
          {tags.map(({ name, color }) => (
            <ContentCardTagLink
              key={name}
              style={{ backgroundColor: color }}>
              {name}
            </ContentCardTagLink>
          ))}
        </ContentCardGroup>
      </ContentCardGroup>
    </ContentCardGroup>
  )
}
