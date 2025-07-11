import { motion, MotionValue, useTransform } from 'motion/react'
import type { PropsWithChildren } from 'react'

export type ResultProps = PropsWithChildren<{
  progress: MotionValue<number>
  start: number
  end: number
}>

export function Result({ progress, start, end, children }: ResultProps) {
  const opacity = useTransform(progress, [start, end], [0, 1])
  const y = useTransform(progress, [start, end], [100, 0])

  return (
    <motion.li
      className='text-center text-5xl leading-tight font-[650] tracking-[-.01em] md:text-6xl lg:text-7xl xl:text-8xl'
      style={{ opacity, y }}>
      {children}
    </motion.li>
  )
}
