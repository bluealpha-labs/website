import type { BadgeProps } from '#components/badge.tsx'

export const tags = ['growth', 'saas', 'mmm'] as const
export type Tag = (typeof tags)[number]

export const tagNames = {
  growth: 'Growth',
  saas: 'SaaS',
  mmm: 'MMM'
} as const satisfies Record<Tag, string>

export const tagColors = {
  growth: 'blue',
  saas: 'orange',
  mmm: 'purple'
} as const satisfies Record<Tag, BadgeProps['color']>
