import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'text-xl font-semibold text-gray-900 md:text-display-xs'
})

type Props = ComponentProps<'h2'>

export function RecentContentTitle({ className, ...props }: Props) {
  return (
    <h2
      className={styles({ className })}
      {...props}
    />
  )
}
