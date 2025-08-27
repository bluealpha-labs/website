import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'max-w-container mx-auto px-4 md:px-8'
})

type Props = ComponentProps<'div'>

export function ContentHeaderContainer({ className, ...props }: Props) {
  return (
    <div
      className={styles({ className })}
      {...props}
    />
  )
}