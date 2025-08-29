import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'mt-3 text-display-md font-semibold text-gray-900 md:text-display-lg'
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
