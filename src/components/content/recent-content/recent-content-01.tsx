import { ContentCardHorizontal } from '../content-card/content-card-horizontal'
import { ContentCardVertical } from '../content-card/content-card-vertical'
import { RecentContent } from './recent-content'
import { RecentContentGrid } from './recent-content-grid'
import { RecentContentGridItem } from './recent-content-grid-item'
import { RecentContentTitle } from './recent-content-title'

type Props = {
  title: string
  items: {
    title: string
    description: string
    image: string
    author: string
    date: string
    tags: { name: string; color: string }[]
    href: string
  }[]
}

export function RecentContent01({ title, items }: Props) {
  return (
    <RecentContent>
      <RecentContentTitle>{title}</RecentContentTitle>
      <RecentContentGrid>
        {items.map((item, index) => {
          const isFeatured = index === 0

          return (
            <RecentContentGridItem
              key={item.title}
              isFeatured={isFeatured}>
              {isFeatured ? <ContentCardVertical {...item} /> : <ContentCardHorizontal {...item} />}
            </RecentContentGridItem>
          )
        })}
      </RecentContentGrid>
    </RecentContent>
  )
}
