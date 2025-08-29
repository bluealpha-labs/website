import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'

const styles = cva({
  base: 'bg-white py-16 md:py-24'
})

type Props = ComponentProps<'section'>

export function ContentHeader({ className, ...props }: Props) {
  return (
    <section
      className={styles({ className })}
      {...props}
    />
  )
}
