import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'overflow-hidden rounded-2xl'
})

type Props = ComponentProps<'a'>

export function ContentCardImageLink({ className, ...props }: Props) {
  return (
    <a
      className={styles({ className })}
      tabIndex={-1}
      {...props}
    />
  )
}
