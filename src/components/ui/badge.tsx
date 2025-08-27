import type { PropsWithChildren } from 'react'

export type BadgeProps = PropsWithChildren<{
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'orange' | 'gray'
  size: 'sm' | 'md' | 'lg'
}>

export function Badge({ color }: BadgeProps) {
  return <div />
}
