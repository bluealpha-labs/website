import { transition } from '#utils/transitions.ts'
import { motion } from 'motion/react'
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

export const linkStyles = tv({
  base: 'font-semibold tracking-[.01em] transition-colors ease-out',
  variants: {
    variant: {
      default: 'hover:text-stone-800'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

export type LinkProps = ComponentProps<typeof motion.a> & VariantProps<typeof linkStyles>

export function Link({ variant, className, ...props }: LinkProps) {
  return (
    <motion.a
      layout
      className={linkStyles({ variant, className })}
      transition={transition}
      {...props}
    />
  )
}
