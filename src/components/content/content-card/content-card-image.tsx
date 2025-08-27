import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'overflow-hidden rounded-2xl'
})

type Props = ComponentProps<'img'>

export function ContentCardImage({ className, ...props }: Props) {
  return (
    <img
      className={styles({ className })}
      {...props}
    />
  )
}
