import { motion, MotionValue, useTransform } from 'motion/react'
import type { Result } from './result-list'

export type ResultProps = {
  progress: MotionValue<number>
  start: number
  end: number
  result: Result
}

export function ResultItem({ progress, start, end, result }: ResultProps) {
  const opacity = useTransform(progress, [start, end], [0, 1])
  const y = useTransform(progress, [start, end], [100, 0])

  return (
    <motion.li
      className='grid grid-cols-[auto_1fr] items-center gap-8'
      style={{ opacity, y }}>
      <span className='min-w-[120px] text-right text-5xl font-[650] tracking-[-.01em] md:min-w-[160px] md:text-6xl lg:min-w-[200px] lg:text-7xl xl:min-w-[200px] xl:text-8xl'>
        {result.value}
      </span>
      <p className='max-w-80 text-base text-gray-500 md:text-lg lg:text-xl xl:text-xl'>{result.description}</p>
    </motion.li>
  )
}
