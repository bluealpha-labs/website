import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'text-sm font-semibold text-blue-700 md:text-md'
})

type Props = ComponentProps<'span'>

export function ContentHeaderLabel({ className, ...props }: Props) {
  return (
    <span
      className={styles({ className })}
      {...props}
    />
  )
}
