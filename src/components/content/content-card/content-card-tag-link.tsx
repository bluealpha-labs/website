import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'rounded-xl outline-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2'
})

type Props = ComponentProps<'a'>

export function ContentCardTagLink({ className, ...props }: Props) {
  return (
    <a
      className={styles({ className })}
      {...props}
    />
  )
}
