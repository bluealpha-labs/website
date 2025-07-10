import { whileHover, whileTap } from '#utils/transitions.ts'
import { motion } from 'motion/react'
import type { ComponentProps } from 'react'
import { type VariantProps } from 'tailwind-variants'
import { buttonStyles } from './button'

export type LinkButtonProps = ComponentProps<typeof motion.a> & VariantProps<typeof buttonStyles>

export function LinkButton({ variant, className, ...props }: LinkButtonProps) {
  return (
    <motion.a
      className={buttonStyles({ variant, className })}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    />
  )
}
