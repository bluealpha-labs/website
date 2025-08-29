import { cva } from '#utils/cva.ts'
import type { VariantProps } from 'cva'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white/80 font-bold text-gray-900 shadow-xl',
  variants: {
    size: {
      sm: 'text-lg min-w-72 p-5',
      md: 'text-2xl min-w-96 p-6'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

type Props = ComponentProps<'p'> & VariantProps<typeof styles>

export function ContentCardImageTitle({ size, className, ...props }: Props) {
  return (
    <p
      className={styles({ size, className })}
      {...props}
    />
  )
}
