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
      default: 'hover:text-gray-800',
      inverse: 'text-white hover:text-gray-100',
      inverseMuted: 'text-gray-400 hover:text-gray-300'
    }
  },
  defaultVariants: {
    variant: 'default',
    color: 'default'
  }
})

export type LinkProps = ComponentProps<typeof motion.a> & VariantProps<typeof linkStyles>

export function Link({ variant, color, className, href, target, rel, ...props }: LinkProps) {
  const isExternal = typeof href === 'string' && /^https?:\/\//.test(href)
  const finalTarget = target ?? (isExternal ? '_blank' : undefined)
  const finalRel = rel ?? (isExternal ? 'noopener noreferrer' : undefined)
  return (
    <motion.a
      layout
      className={linkStyles({ variant, color, className })}
      transition={snappyTransition}
      href={href}
      target={finalTarget}
      rel={finalRel}
      {...props}
    />
  )
}
