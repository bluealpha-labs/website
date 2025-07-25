import { smoothTransition } from '#utils/transitions.ts'
import { motion } from 'motion/react'
import { Actions } from './actions'
import { Description } from './description'
import { Title } from './title'

export function Content() {
  return (
    <motion.div
      className='flex flex-col gap-8 max-xl:items-center'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={smoothTransition}>
      <div className='flex flex-col gap-4 max-xl:items-center max-xl:text-center lg:gap-6'>
        <Title />
        <Description />
      </div>
      <Actions />
    </motion.div>
  )
}
