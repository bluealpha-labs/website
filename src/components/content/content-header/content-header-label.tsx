import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'text-blue-700 md:text-md text-sm font-semibold'
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
