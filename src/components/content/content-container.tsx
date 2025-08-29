import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'max-w-container mx-auto px-4 pb-16 md:px-8 md:pb-24'
})

type Props = ComponentProps<'div'>

export function ContentContainer({ className, ...props }: Props) {
  return (
    <div
      className={styles({ className })}
      {...props}
    />
  )
}
