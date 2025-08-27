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
}

export function ContentHeader01({ label, title, description }: Props) {
  return (
    <ContentHeader>
      <ContentHeaderContainer>
        <ContentHeaderWrapper>
          <ContentHeaderLabel>{label}</ContentHeaderLabel>
          <ContentHeaderTitle>{title}</ContentHeaderTitle>
          <ContentHeaderDescription>{description}</ContentHeaderDescription>
        </ContentHeaderWrapper>
      </ContentHeaderContainer>
    </ContentHeader>
  )
}
