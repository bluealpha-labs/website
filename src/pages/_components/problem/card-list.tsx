import { ArrowTrendingUpIcon, BanknotesIcon, ChartBarIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'
import { CardItem } from './card-item'

export function CardList() {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-7'>
      {cards.map((card, index) => (
        <CardItem
          key={card.id}
          className={`col-span-1 lg:col-span-1 ${index % 3 === 0 ? 'xl:col-span-3' : 'xl:col-span-4'}`}
          card={card}
        />
      ))}
    </div>
  )
}

export const cards = [
  {
    id: 'cac',
    label: 'Increasing CAC',
    title: 'Customers cost more',
    description:
      'Auction competition, privacy rules, and saturated audiences push acquisition costs up double digits year-over-year. Channels that once scaled cheaply now barely break even unless strategy - and measurement - evolve.',
    icon: ArrowTrendingUpIcon
  },

  {
    id: 'blackBox',
    label: 'Black Box Metrics',
    title: 'Platforms grade their own homework',
    description:
      'Ad platforms mark their own exams, inflating success with murky attribution windows and view-through alchemy that can pad conversions by 15%. Without a second opinion, budgets chase mirages while true acquisition costs swell. Independent measurement strips away the smoke so every dollar backs real growth.',
    icon: ChartBarIcon
  },
  {
    id: 'dataSilos',
    label: 'Data Silos & Fragmentation',
    title: 'Too many tools, not enough signal',
    description:
      'Marketers burn nearly a third of their week copy-pasting CSVs, stitching charts, and begging tools to speak the same language. Those lost hours disappear into spreadsheet acrobatics that still fail to show the full picture.',
    icon: WrenchScrewdriverIcon
  },
  {
    id: 'budget',
    label: 'Budgets Under Pressure',
    title: 'Higher targets, less cash',
    description:
      'Economic headwinds and rising media prices squeeze spend. Teams must justify every dollar, re-plan weekly, and still hit stretch KPIs - turning “do more with less” from slogan into daily reality.',
    icon: BanknotesIcon
  }
] as const
export type Card = (typeof cards)[number]
