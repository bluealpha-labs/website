import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'flex',
  variants: {
    direction: {
      column: 'flex-col'
    },
    gap: {
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6'
    }
  }
})

type Props = ComponentProps<'div'>

export function ContentCardGroup({ className, ...props }: Props) {
  return (
    <div
      className={styles({ className })}
      {...props}
    />
  )
}
