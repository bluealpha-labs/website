import { Badge, type BadgeProps } from '#components/badge.tsx'
import { ContentCardTagLink } from '../content-card/content-card-tag-link'
import { ContentGroup } from '../content-group'
import { ContentHeader } from './content-header'
import { ContentHeaderContainer } from './content-header-container'
import { ContentHeaderDescription } from './content-header-description'
import { ContentHeaderImage } from './content-header-image'
import { ContentHeaderLabel } from './content-header-label'
import { ContentHeaderTitle } from './content-header-title'
import { ContentHeaderWrapper } from './content-header-wrapper'

type Props = {
  label: string
  title: string
  image: string
  description: string
  tags: { name: string; color: BadgeProps['color']; href?: string }[]
  author?: string
  date?: string
  dateTime?: string
}

export function ContentHeader02({ label, title, image, description, tags, author, date, dateTime }: Props) {
  return (
    <ContentHeader>
      <ContentHeaderContainer>
        <ContentHeaderWrapper>
          <ContentHeaderLabel>{label}</ContentHeaderLabel>
          <ContentHeaderTitle>{title}</ContentHeaderTitle>
          {(author || date) && (
            <p className='mt-2 text-sm font-[500] text-gray-600'>
              {author && (
                <>
                  By {author}
                  {date ? ' • ' : ''}
                </>
              )}
              {date && (
                <time dateTime={dateTime}>{date}</time>
              )}
            </p>
          )}
          <ContentHeaderDescription>{description}</ContentHeaderDescription>
          <ContentGroup
            className='mt-8'
            gap={2}>
            {tags.map(({ name, color, href }) => (
              <ContentCardTagLink
                key={name}
                href={href}>
                <Badge color={color}>{name}</Badge>
              </ContentCardTagLink>
            ))}
          </ContentGroup>
        </ContentHeaderWrapper>
        <ContentHeaderImage
          src={image}
          alt={title}
        />
      </ContentHeaderContainer>
    </ContentHeader>
  )
}
