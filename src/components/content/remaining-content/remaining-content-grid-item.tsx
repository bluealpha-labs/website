import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: ''
})

type Props = ComponentProps<'li'>

export function RemainingContentGridItem({ className, ...props }: Props) {
  return (
    <li
      className={styles({ className })}
      {...props}
    />
  )
}
