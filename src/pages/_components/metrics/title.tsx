import { smoothTransition } from '#utils/transitions.ts'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export function Title() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      className='text-center text-xl font-[650] md:text-2xl'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={smoothTransition}>
      Our results...
    </motion.span>
  )
}
