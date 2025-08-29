import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'aspect-[1.5] w-full object-cover'
})

type Props = ComponentProps<'img'>

export function ContentCardImage({ className, alt = '', ...props }: Props) {
  return (
    <img
      {...props}
      className={styles({ className })}
      alt={alt}
      loading='lazy'
      decoding='async'
    />
  )
}
