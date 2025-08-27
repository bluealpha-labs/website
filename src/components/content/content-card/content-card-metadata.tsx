import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'text-sm font-semibold text-blue-700'
})

type Props = ComponentProps<'p'>

export function ContentCardMetadata({ className, ...props }: Props) {
  return (
    <p
      className={styles({ className })}
      {...props}
    />
  )
}
