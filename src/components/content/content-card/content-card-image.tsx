import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'aspect-[1.5] w-full object-cover'
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
