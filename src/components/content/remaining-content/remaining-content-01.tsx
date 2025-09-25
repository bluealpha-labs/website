import type { BadgeProps } from '#components/badge.tsx'
import { ContentCard01 } from '../content-card/content-card-01'
import { RemainingContent } from './remaining-content'
import { RemainingContentGrid } from './remaining-content-grid'
import { RemainingContentGridItem } from './remaining-content-grid-item'
import { RemainingContentTitle } from './remaining-content-title'

type Props = {
  title: string
  items: {
    id?: string
    title: string
    description: string
    image: string
    author: string
    date: string
    tags: { name: string; color: BadgeProps['color'] }[]
    href: string
  }[]
}

export function RemainingContent01({ title, items }: Props) {
  return (
    <RemainingContent>
      <RemainingContentTitle>{title}</RemainingContentTitle>
      <RemainingContentGrid>
        {items.map(({ id, ...item }) => {
          return (
            <RemainingContentGridItem key={id ?? item.href}>
              <ContentCard01 {...item} />
            </RemainingContentGridItem>
          )
        })}
      </RemainingContentGrid>
    </RemainingContent>
  )
}
