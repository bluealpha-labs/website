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
  labelAs?: 'span' | 'p' | 'h3' | 'h4'
  labelHref?: string
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4'
  descriptionAs?: 'p' | 'h2' | 'h3'
}

export function ContentHeader01({
  label,
  title,
  description,
  labelAs,
  labelHref,
  titleAs,
  descriptionAs
}: Props) {
  return (
    <ContentHeader>
      <ContentHeaderContainer>
        <ContentHeaderWrapper>
          <ContentHeaderLabel
            as={labelAs}
            href={labelHref}>
            {label}
          </ContentHeaderLabel>
          <ContentHeaderTitle as={titleAs}>{title}</ContentHeaderTitle>
          <ContentHeaderDescription as={descriptionAs}>{description}</ContentHeaderDescription>
        </ContentHeaderWrapper>
      </ContentHeaderContainer>
    </ContentHeader>
  )
}
