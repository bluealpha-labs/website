import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'
})

type Props = ComponentProps<'ul'>

export function RemainingContentGrid({ className, ...props }: Props) {
  return (
    <ul
      className={styles({ className })}
      {...props}
    />
  )
}
