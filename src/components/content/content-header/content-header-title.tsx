import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'text-display-md text-gray-900 md:text-display-lg mt-3 font-semibold'
})

type Props = ComponentProps<'h2'>

export function ContentHeaderTitle({ className, ...props }: Props) {
  return (
    <h2
      className={styles({ className })}
      {...props}
    />
  )
}
