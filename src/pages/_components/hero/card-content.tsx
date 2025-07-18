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
        'flex flex-col gap-5 rounded-3xl border border-stone-50 p-5 shadow-2xl shadow-stone-900/10 sm:gap-6 sm:p-6',
        bgColor
      )}>
      <div className='flex flex-col gap-2'>
        <span className='w-fit rounded-full bg-stone-50 px-3 py-1.5 font-mono text-xs font-semibold tracking-[.01em] text-stone-800 sm:px-4'>
          INSIGHT
        </span>
        <div className='rounded-2xl bg-stone-50 px-3 py-2.5 sm:px-4 sm:py-3'>
          <p className='text-base leading-relaxed font-semibold text-stone-800 sm:text-lg'>{insight}</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <span className='w-fit rounded-full bg-blue-50 px-3 py-1.5 font-mono text-xs font-semibold tracking-[.01em] text-blue-800 sm:px-4'>
          RESULT
        </span>
        <p className='text-xl leading-snug font-[650] sm:text-2xl'>{result}</p>
      </div>
    </div>
  )
}
