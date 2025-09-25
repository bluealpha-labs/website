import { cva } from '#utils/cva.ts'
import type { ComponentPropsWithoutRef } from 'react'

const styles = cva({
  base: 'text-sm font-semibold text-blue-700 md:text-md'
})

type LabelTag = 'span' | 'p' | 'h3' | 'h4'

type Props = ComponentPropsWithoutRef<'span'> & {
  as?: LabelTag
  href?: string
}

export function ContentHeaderLabel({ as, href, className, ...props }: Props) {
  const Tag = (as ?? (href ? 'a' : 'span')) as LabelTag | 'a'
  const finalClassName = styles({ className })

  if (Tag === 'a') {
    return (
      <a
        className={finalClassName}
        href={href}
        {...props}
      />
    )
  }

  const Component = Tag

  return (
    <Component
      className={finalClassName}
      {...props}
    />
  )
}
