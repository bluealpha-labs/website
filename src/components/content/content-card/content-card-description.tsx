import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'line-clamp-2 text-md text-gray-600'
})

type Props = ComponentProps<'p'>

export function ContentCardDescription({ className, ...props }: Props) {
  return (
    <p
      className={styles({ className })}
      {...props}
    />
  )
}
