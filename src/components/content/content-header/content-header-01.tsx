import { ContentHeader } from './content-header'
import { ContentHeaderContainer } from './content-header-container'
import { ContentHeaderDescription } from './content-header-description'
import { ContentHeaderLabel } from './content-header-label'
import { ContentHeaderTitle } from './content-header-title'
import { ContentHeaderWrapper } from './content-header-wrapper'

export function ContentHeader01() {
  return (
    <ContentHeader>
      <ContentHeaderContainer>
        <ContentHeaderWrapper>
          <ContentHeaderLabel>Our blog</ContentHeaderLabel>
          <ContentHeaderTitle>Stories and interviews</ContentHeaderTitle>
          <ContentHeaderDescription>
            Subscribe to learn about new product features, the latest in technology, solutions, and updates.
          </ContentHeaderDescription>
        </ContentHeaderWrapper>
      </ContentHeaderContainer>
    </ContentHeader>
  )
}
