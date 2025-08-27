import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'flex gap-x-2'
})

type Props = ComponentProps<'div'>

export function ContentCardTags({ className, ...props }: Props) {
  return (
    <div
      className={styles({ className })}
      {...props}
    />
  )
}
