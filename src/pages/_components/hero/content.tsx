import { smoothTransition } from '#utils/transitions.ts'
import { motion } from 'motion/react'
import { Actions } from './actions'
import { Description } from './description'
import { Title } from './title'

export function Content() {
  return (
    <motion.div
      className='flex flex-1 flex-col justify-center gap-8'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={smoothTransition}>
      <div className='flex flex-col gap-6'>
        <Title />
        <Description />
      </div>
      <Actions />
    </motion.div>
  )
}
