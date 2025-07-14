import { cn } from '#utils/cn.ts'

export type CardContentProps = {
  insight: string
  result: string
  position?: number
}

export function CardContent({ insight, result, position = 0 }: CardContentProps) {
  const bgColors = ['bg-white', 'bg-stone-50', 'bg-stone-100']
  const bgColor = bgColors[position] || bgColors[bgColors.length - 1]

  return (
    <div
      className={cn(
        'flex flex-col gap-6 rounded-3xl border border-stone-50 p-6 shadow-2xl shadow-stone-900/10',
        bgColor
      )}>
      <div className='flex flex-col gap-2'>
        <span className='w-fit rounded-full bg-stone-50 px-4 py-1.5 font-mono text-xs font-semibold tracking-[.01em] text-stone-800'>
          INSIGHT
        </span>
        <div className='rounded-2xl bg-stone-50 px-4 py-3'>
          <p className='text-lg leading-relaxed font-semibold text-stone-800'>{insight}</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <span className='w-fit rounded-full bg-blue-50 px-4 py-1.5 font-mono text-xs font-semibold tracking-[.01em] text-blue-800'>
          RESULT
        </span>
        <p className='text-2xl leading-snug font-[650]'>{result}</p>
      </div>
    </div>
  )
}
