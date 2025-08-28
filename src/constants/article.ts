import type { BadgeProps } from '#components/badge.tsx'

export const tags = ['incrementality', 'mmm'] as const
export type Tag = (typeof tags)[number]

export const tagNames = {
  incrementality: 'Incrementality',
  mmm: 'Marketing Mix Modeling'
} as const satisfies Record<Tag, string>

export const tagColors = {
  incrementality: 'blue',
  mmm: 'orange'
} as const satisfies Record<Tag, BadgeProps['color']>
