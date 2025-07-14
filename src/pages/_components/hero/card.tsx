import { motion, useMotionValue, useTransform, type PanInfo } from 'motion/react'
import type { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren<{
  onSendToBack: () => void
}>

const sensitivity = 200

export function Card({ children, onSendToBack }: CardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [60, -60])
  const rotateY = useTransform(x, [-100, 100], [-60, 60])

  function handleDragEnd(_: never, info: PanInfo) {
    const xExceeded = Math.abs(info.offset.x) > sensitivity
    const yExceeded = Math.abs(info.offset.y) > sensitivity

    if (xExceeded || yExceeded) {
      onSendToBack()
    } else {
      x.set(0)
      y.set(0)
    }
  }

  return (
    <motion.div
      className='absolute cursor-grab'
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}>
      {children}
    </motion.div>
  )
}
