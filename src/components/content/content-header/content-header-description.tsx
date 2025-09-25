import { cva } from '#utils/cva.ts'
import type { ComponentPropsWithoutRef } from 'react'

const styles = cva({
  base: 'mt-4 text-lg text-tertiary md:mt-6 md:text-xl'
})

type DescriptionTag = 'p' | 'h2' | 'h3'

type Props = ComponentPropsWithoutRef<'p'> & {
  as?: DescriptionTag
}

export function ContentHeaderDescription({ as: Tag = 'p', className, ...props }: Props) {
  return (
    <Tag
      className={styles({ className })}
      {...props}
    />
  )
}
