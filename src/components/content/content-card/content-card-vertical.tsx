import { ContentCardDescription } from './content-card-description'
import { ContentCardGroup } from './content-card-group'
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

export function ContentCardVertical({ title, description, image, author, date, tags, href }: Props) {
  return (
    <ContentCardGroup
      direction='column'
      gap={4}>
      <ContentCardImageLink href={href}>
        <ContentCardImage
          src={image}
          alt={title}
        />
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
            <ContentCardTagLink key={name}>{name}</ContentCardTagLink>
          ))}
        </ContentCardGroup>
      </ContentCardGroup>
    </ContentCardGroup>
  )
}
