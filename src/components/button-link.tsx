import { whileHover, whileTap } from '#utils/transitions.ts'
import { motion } from 'motion/react'
import type { ComponentProps } from 'react'
import { type VariantProps } from 'tailwind-variants'
import { buttonStyles } from './button'

export type ButtonLinkProps = ComponentProps<typeof motion.a> & VariantProps<typeof buttonStyles>

export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return (
    <motion.a
      className={buttonStyles({ variant, className })}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    />
  )
}
