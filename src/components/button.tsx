import { whileHover, whileTap } from '#utils/transitions.ts'
import { motion } from 'motion/react'
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonStyles = tv({
  base: 'rounded-full flex items-center gap-2 h-11 font-semibold tracking-wide px-4 cursor-pointer transition-colors ease-out',
  variants: {
    variant: {
      default: 'bg-stone-900 text-white hover:bg-stone-800',
      outline: 'border border-stone-200 hover:bg-stone-50 hover:border-stone-300'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export type ButtonProps = ComponentProps<typeof motion.button> & VariantProps<typeof buttonStyles>

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <motion.button
      className={buttonStyles({ variant, className })}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    />
  )
}
