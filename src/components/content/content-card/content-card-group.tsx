import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'

const styles = cva({
  base: 'flex',
  variants: {
    direction: {
      column: 'flex-col'
    },
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6'
    }
  }
})

type Props = ComponentProps<'div'> & VariantProps<typeof styles>

export function ContentCardGroup({ direction, gap, className, ...props }: Props) {
  return (
    <div
      className={styles({ direction, gap, className })}
      {...props}
    />
  )
}
