import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'mx-auto max-w-prose md:max-w-180'
})

type Props = ComponentProps<'div'>

export function ContentWrapper({ className, ...props }: Props) {
  return (
    <div
      className={styles({ className })}
      {...props}
    />
  )
}
