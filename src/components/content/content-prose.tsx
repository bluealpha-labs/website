import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'prose md:prose-lg mx-auto'
})

type Props = ComponentProps<'div'>

export function ContentProse({ className, ...props }: Props) {
  return (
    <div
      className={styles({ className })}
      {...props}
    />
  )
}
