import { snappyTransition } from '#utils/transitions.ts'
import { motion } from 'motion/react'
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const linkStyles = tv({
  base: 'transition-colors ease-out select-none tracking-[.01em]',
  variants: {
    variant: {
      default: 'font-semibold',
      simple: 'text-sm font-[450]'
    },
    color: {
      default: 'hover:text-stone-800',
      inverse: 'text-white hover:text-stone-100',
      inverseMuted: 'text-stone-400 hover:text-stone-300'
    }
  },
  defaultVariants: {
    variant: 'default',
    color: 'default'
  }
})

export type LinkProps = ComponentProps<typeof motion.a> & VariantProps<typeof linkStyles>

export function Link({ variant, color, className, ...props }: LinkProps) {
  return (
    <motion.a
      layout
      className={linkStyles({ variant, color, className })}
      transition={snappyTransition}
      {...props}
    />
  )
}
