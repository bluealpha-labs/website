import { ArrowTrendingUpIcon, BanknotesIcon, ChartBarIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'
import { CardItem } from './card-item'

export function CardList() {
  return (
    <div className='grid grid-cols-7 gap-4'>
      {cards.map((card, index) => (
        <CardItem
          key={card.id}
          className={index % 3 === 0 ? 'col-span-3' : 'col-span-4'}
          card={card}
        />
      ))}
    </div>
  )
}

export const cards = [
  {
    id: 'dataSilos',
    label: 'Data Silos & Fragmentation',
    title: 'Too many tools, not enough signal',
    description:
      'Marketers lose ~30 % of the week copy-pasting data across platforms just to assemble a “single” report. Those hours could drive campaign alignment, craft better creative, and deepen customer retention—but instead vanish into spreadsheet gymnastics and “export-csv” loops.',
    icon: WrenchScrewdriverIcon
  },
  {
    id: 'blackBox',
    label: 'Black Box Metrics',
    title: 'Platforms grade their own homework and your ROI looks great until finance checks the bank',
    description:
      'Ad networks report performance with opaque attribution windows and view-through credits that can over-state true conversions by 10-20 %. Without independent verification, teams double down on channels that appear profitable while real acquisition costs keep climbing. Taking measurement in-house exposes phantom conversions and lets you redirect every dollar to what genuinely moves revenue.',
    icon: ChartBarIcon
  },
  {
    id: 'budget',
    label: 'Budgets Under Pressure ',
    title: 'Higher targets, less cash',
    description:
      'Economic headwinds and rising media prices squeeze spend. Teams must justify every dollar, re-plan weekly, and still hit stretch KPIs - turning “do more with less” from slogan into daily reality.',
    icon: BanknotesIcon
  },
  {
    id: 'cac',
    label: 'Increasing CAC',
    title: 'Customers cost more',
    description:
      'Auction competition, privacy rules, and saturated audiences push acquisition costs up double digits year-over-year. Channels that once scaled cheaply now barely break even unless strategy - and measurement - evolve.',
    icon: ArrowTrendingUpIcon
  }
] as const
export type Card = (typeof cards)[number]
