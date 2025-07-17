import { cn } from '#utils/cn.ts'
import type { Card } from './card-list'

export type CardItemProps = {
  className?: string
  card: Card
}

export function CardItem({ className, card: { label, title, description, icon: Icon } }: CardItemProps) {
  return (
    <div className={cn('relative h-84', className)}>
      <div className='h-full w-full rounded-3xl bg-stone-50 p-8 duration-300'>
        <div className='flex flex-col gap-6'>
          <div className='inline-flex'>
            <div className='rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-3'>
              <Icon className='h-8 w-8 text-blue-600' />
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            {/* <span className='inline-block w-fit rounded-full bg-stone-200 px-3 py-1 font-mono text-xs font-[500] tracking-wider text-stone-600 uppercase'>
              {label}
            </span> */}
            <h2 className='text-2xl leading-tight font-[650] tracking-[-.02em] text-stone-900'>{title}</h2>
            <p className='text-base leading-relaxed text-stone-600'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
