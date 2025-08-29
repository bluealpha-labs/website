import { cn } from '#utils/cn.ts'
import { motion } from 'motion/react'
import type { ComponentType, SVGProps } from 'react'

export type BoxProps = {
  index: number
  isInView: boolean
  icon: ComponentType<SVGProps<SVGSVGElement>>
  position: { top: string; left: string }
  className?: string
}

export function Box({ index, isInView, icon: Icon, position, className }: BoxProps) {
  const delay = index * 0.08
  const floatDistanceY = -6 - (index % 3) * 2
  const floatDistanceX = (index % 2 === 0 ? 4 : -4) + (index % 3)
  const floatDuration = 4 + (index % 4) * 0.5
  const floatDelay = delay + 0.5 + index * 0.15

  return (
    <motion.div
      className={cn(
        'absolute flex size-12 items-center justify-center rounded-2xl bg-gray-100 sm:size-16 md:size-20',
        className
      )}
      style={{ top: position.top, left: position.left }}
      initial={{ top: '50%', left: '50%', scale: 0, opacity: 0, x: 0, y: 0 }}
      animate={
        isInView && {
          top: position.top,
          left: position.left,
          scale: 1,
          opacity: 1,
          x: [0, floatDistanceX, 0],
          y: [0, floatDistanceY, 0]
        }
      }
      transition={{
        top: { type: 'spring', stiffness: 80, damping: 20, delay, restDelta: 0.01 },
        left: { type: 'spring', stiffness: 80, damping: 20, delay, restDelta: 0.01 },
        scale: { type: 'spring', stiffness: 120, damping: 15, delay, restDelta: 0.01 },
        opacity: { duration: 0.3, delay },
        x: {
          duration: floatDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: floatDelay
        },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: floatDelay
        }
      }}>
      <Icon className='size-6 text-gray-600 sm:size-8 md:size-10' />
    </motion.div>
  )
}
