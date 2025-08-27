import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'text-primary outline-focus-ring flex justify-between gap-x-4 rounded-md text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2'
})

type Props = ComponentProps<'a'>

export function ContentCardTitle({ className, ...props }: Props) {
  return (
    <a
      className={styles({ className })}
      {...props}
    />
  )
}
