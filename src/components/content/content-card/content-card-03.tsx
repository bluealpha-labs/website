import { ContentGroup } from '../content-group'
import { ContentCardImage } from './content-card-image'
import { ContentCardImageLink } from './content-card-image-link'
import { ContentCardMetadata } from './content-card-metadata'
import { ContentCardTitle } from './content-card-title'

type Props = {
  label: string
  title: string
  image: string
  href: string
}

export function ContentCard03({ label, title, image, href }: Props) {
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
          <ContentCardMetadata>{label}</ContentCardMetadata>
          <ContentCardTitle href={href}>{title}</ContentCardTitle>
        </ContentGroup>
      </ContentGroup>
    </ContentGroup>
  )
}
