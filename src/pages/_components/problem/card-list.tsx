import { cn } from '#utils/cn.ts'
import { useState } from 'react'
import { CardItem } from './card-item'

export function CardList() {
  const [openId, setOpenId] = useState<Card['id'] | null>(null)

  return (
    <div className='grid grid-cols-7 gap-4'>
      {cards.map((card, index) => (
        <CardItem
          key={card.id}
          className={cn({
            'col-span-3': index % 3 === 0,
            'col-span-4': index % 3 !== 0
          })}
          card={card}
          onOpen={setOpenId}
        />
      ))}
    </div>
  )
}

export const cards = [
  {
    id: 'dataSilos',
    label: 'Data Silos & Fragmentation',
    title: 'Too many tools, not enough signal.'
  },
  {
    id: 'blackBox',
    label: 'Black Box Metrics',
    title: 'Platforms grade their own homework and your ROI looks great until finance checks the bank.'
  },
  {
    id: 'budget',
    label: 'Budgets Under Pressure ',
    title: 'Higher targets, less cash.'
  },
  {
    id: 'cac',
    label: 'Increasing CAC',
    title: 'Customers cost more.'
  }
] as const
export type Card = (typeof cards)[number]
