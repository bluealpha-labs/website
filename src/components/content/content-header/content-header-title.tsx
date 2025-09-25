import { cva } from '#utils/cva.ts'
import type { ComponentPropsWithoutRef } from 'react'

const styles = cva({
  base: 'mt-3 text-display-md font-semibold text-gray-900 md:text-display-lg'
})

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

type Props = ComponentPropsWithoutRef<'h2'> & {
  as?: HeadingTag
}

export function ContentHeaderTitle({ as: Tag = 'h2', className, ...props }: Props) {
  return (
    <Tag
      className={styles({ className })}
      {...props}
    />
  )
}
