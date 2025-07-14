import { cn } from '#utils/cn.ts'
import type { Card } from './card-list'

export type CardItemProps = {
  className: string
  card: Card
  onOpen: (id: Card['id']) => void
}

export function CardItem({ className, card: { id, label, title }, onOpen }: CardItemProps) {
  return (
    <div
      className={cn('flex h-80 rounded-3xl bg-stone-100 p-6', className)}
      onClick={() => onOpen(id)}>
      <div className='flex flex-col items-start gap-2'>
        <span className='font-mono text-sm font-[450] text-stone-500 uppercase'>{label}</span>
        <h2 className='max-w-md text-xl font-[650] tracking-[-.01em]'>{title}</h2>
      </div>
    </div>
  )
}
