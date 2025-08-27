import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'mx-auto flex w-full max-w-3xl flex-col items-center text-center'
})

type Props = ComponentProps<'div'>

export function ContentHeaderWrapper({ className, ...props }: Props) {
  return (
    <div
      className={styles({ className })}
      {...props}
    />
  )
}
