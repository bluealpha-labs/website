import { Alcove } from '#components/logos/alcove.tsx'
import { Beehiiv } from '#components/logos/beehiiv.tsx'
import { Pawlicy } from '#components/logos/pawlicy.tsx'
import { Pettable } from '#components/logos/pettable.tsx'
import { smoothTransition } from '#utils/transitions.ts'
import { motion } from 'motion/react'

export function Logos() {
  return (
    <motion.div
      className='flex flex-col items-center gap-6 overflow-hidden md:gap-8'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...smoothTransition, delay: 0.2 }}>
      <p className='text-sm font-[450] tracking-[.01em] text-stone-500'>Trusted by marketing teams at</p>
      <div className='flex h-7 items-center gap-6 text-stone-400 md:h-5.5 md:gap-12'>
        <Beehiiv className='h-5 md:h-6' />
        <Pettable className='h-5 md:h-6' />
        <Alcove className='h-6 max-sm:hidden md:h-7' />
        <Pawlicy className='h-5 md:h-6' />
        {/* <CorralData className='h-3 md:h-4' /> */}
      </div>
    </motion.div>
  )
}
