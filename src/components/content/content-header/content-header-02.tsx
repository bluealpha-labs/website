import { ContentCardTagLink } from '../content-card/content-card-tag-link'
import { ContentGroup } from '../content-group'
import { ContentHeader } from './content-header'
import { ContentHeaderContainer } from './content-header-container'
import { ContentHeaderDescription } from './content-header-description'
import { ContentHeaderLabel } from './content-header-label'
import { ContentHeaderTitle } from './content-header-title'
import { ContentHeaderWrapper } from './content-header-wrapper'

type Props = {
  label: string
  title: string
  description: string
  tags: { name: string; color: string }[]
}

export function ContentHeader02({ label, title, description, tags }: Props) {
  return (
    <ContentHeader>
      <ContentHeaderContainer>
        <ContentHeaderWrapper>
          <ContentHeaderLabel>{label}</ContentHeaderLabel>
          <ContentHeaderTitle>{title}</ContentHeaderTitle>
          <ContentHeaderDescription>{description}</ContentHeaderDescription>
          <ContentGroup
            className='mt-8'
            gap={2}>
            {tags.map(({ name, color }) => (
              <ContentCardTagLink key={name}>{name}</ContentCardTagLink>
            ))}
          </ContentGroup>
        </ContentHeaderWrapper>
      </ContentHeaderContainer>
    </ContentHeader>
  )
}
