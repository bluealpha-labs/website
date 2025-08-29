import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'mt-12 h-60 w-full object-cover md:mt-16 md:h-160'
})

type Props = ComponentProps<'img'>

export function ContentHeaderImage({ className, ...props }: Props) {
  return (
    <img
      className={styles({ className })}
      {...props}
    />
  )
}
