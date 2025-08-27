import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'text-gray-600 mt-4 text-lg md:mt-6 md:text-xl'
})

type Props = ComponentProps<'p'>

export function ContentHeaderDescription({ className, ...props }: Props) {
  return (
    <p
      className={styles({ className })}
      {...props}
    />
  )
}
