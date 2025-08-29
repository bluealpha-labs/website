import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'

const styles = cva({
  base: 'size-max flex items-center whitespace-nowrap rounded-full ring-1 ring-inset',
  variants: {
    size: {
      sm: 'py-0.5 px-2 text-xs font-medium',
      md: 'py-0.5 px-2.5 text-sm font-medium',
      lg: 'py-1 px-3 text-sm font-medium'
    },
    color: {
      gray: 'bg-gray-50 text-gray-700 ring-gray-200',
      moss: 'bg-moss-50 text-moss-700 ring-moss-200',
      greenLight: 'bg-green-light-50 text-green-light-700 ring-green-light-200',
      green: 'bg-green-50 text-green-700 ring-green-200',
      teal: 'bg-teal-50 text-teal-700 ring-teal-200',
      cyan: 'bg-cyan-50 text-cyan-700 ring-cyan-200',
      blueLight: 'bg-blue-light-50 text-blue-light-700 ring-blue-light-200',
      blue: 'bg-blue-50 text-blue-700 ring-blue-200',
      blueDark: 'bg-blue-dark-50 text-blue-dark-700 ring-blue-dark-200',
      indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
      violet: 'bg-violet-50 text-violet-700 ring-violet-200',
      purple: 'bg-purple-50 text-purple-700 ring-purple-200',
      fuchsia: 'bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200',
      pink: 'bg-pink-50 text-pink-700 ring-pink-200',
      rose: 'bg-rose-50 text-rose-700 ring-rose-200',
      orange: 'bg-orange-50 text-orange-700 ring-orange-200',
      orangeDark: 'bg-orange-dark-50 text-orange-dark-700 ring-orange-dark-200',
      yellow: 'bg-yellow-50 text-yellow-700 ring-yellow-200'
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'blue'
  }
})

export type BadgeProps = ComponentProps<'span'> & VariantProps<typeof styles>

export function Badge({ size, color, className, ...props }: BadgeProps) {
  return (
    <span
      className={styles({ size, color, className })}
      {...props}
    />
  )
}
