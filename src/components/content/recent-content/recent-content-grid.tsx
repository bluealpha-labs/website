import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-8'
})

type Props = ComponentProps<'ul'>

export function RecentContentGrid({ className, ...props }: Props) {
  return (
    <ul
      className={styles({ className })}
      {...props}
    />
  )
}
