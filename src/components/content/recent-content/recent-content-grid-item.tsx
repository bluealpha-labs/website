import { cva } from '#utils/cva.ts'
import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'

const styles = cva({
  base: 'flex flex-col gap-6 md:gap-8',
  variants: {
    isFeatured: {
      true: 'xl:row-span-2',
      false: 'xl:flex-row xl:gap-6'
    }
  }
})

type Props = ComponentProps<'li'> & VariantProps<typeof styles>

export function RecentContentGridItem({ isFeatured, className, ...props }: Props) {
  return (
    <li
      className={styles({ isFeatured, className })}
      {...props}
    />
  )
}
