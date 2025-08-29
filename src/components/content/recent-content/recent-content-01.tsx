import type { BadgeProps } from '#components/badge.tsx'
import { ContentCard01 } from '../content-card/content-card-01'
import { ContentCard02 } from '../content-card/content-card-02'
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
    tags: { name: string; color: BadgeProps['color'] }[]
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
              {isFeatured ? <ContentCard01 {...item} /> : <ContentCard02 {...item} />}
            </RecentContentGridItem>
          )
        })}
      </RecentContentGrid>
    </RecentContent>
  )
}
