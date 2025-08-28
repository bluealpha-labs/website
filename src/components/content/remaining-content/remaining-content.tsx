import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'mx-auto flex w-full max-w-container flex-col gap-8 bg-white px-4 pb-16 md:px-8 md:pb-24'
})

type Props = ComponentProps<'section'>

export function RemainingContent({ className, ...props }: Props) {
  return (
    <section
      className={styles({ className })}
      {...props}
    />
  )
}
