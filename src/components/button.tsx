import { whileHover, whileTap } from '#utils/transitions.ts'
import { motion } from 'motion/react'
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const buttonStyles = tv({
  base: 'flex h-11 cursor-pointer items-center gap-2 rounded-full px-4 font-semibold tracking-[.01em] transition-colors ease-out select-none',
  variants: {
    variant: {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
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
