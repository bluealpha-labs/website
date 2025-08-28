import { ContentGroup } from '../content-group'
import { ContentCardDescription } from './content-card-description'
import { ContentCardImage } from './content-card-image'
import { ContentCardImageLink } from './content-card-image-link'
import { ContentCardMetadata } from './content-card-metadata'
import { ContentCardTagLink } from './content-card-tag-link'
import { ContentCardTitle } from './content-card-title'

type Props = {
  title: string
  description: string
  image: string
  author: string
  date: string
  tags: { name: string; color: string }[]
  href: string
}

export function ContentCard01({ title, description, image, author, date, tags, href }: Props) {
  return (
    <ContentGroup
      direction='column'
      gap={4}>
      <ContentCardImageLink href={href}>
        <ContentCardImage
          src={image}
          alt={title}
        />
      </ContentCardImageLink>
      <ContentGroup
        direction='column'
        gap={6}>
        <ContentGroup
          direction='column'
          gap={2}>
          <ContentCardMetadata>
            {author} • {date}
          </ContentCardMetadata>
          <ContentGroup
            direction='column'
            gap={1}>
            <ContentCardTitle href={href}>{title}</ContentCardTitle>
            <ContentCardDescription>{description}</ContentCardDescription>
          </ContentGroup>
        </ContentGroup>
        <ContentGroup gap={2}>
          {tags.map(({ name, color }) => (
            <ContentCardTagLink key={name}>{name}</ContentCardTagLink>
          ))}
        </ContentGroup>
      </ContentGroup>
    </ContentGroup>
  )
}
