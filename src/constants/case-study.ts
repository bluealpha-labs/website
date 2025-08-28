import type { BadgeProps } from '#components/badge.tsx'

export const companies = ['beehiiv', 'pettable'] as const
export type Company = (typeof companies)[number]

export const tags = ['incrementality', 'mmm'] as const
export type Tag = (typeof tags)[number]

export const companyNames = {
  beehiiv: 'Beehiiv',
  pettable: 'Pettable'
} as const satisfies Record<Company, string>

export const tagNames = {
  incrementality: 'Incrementality',
  mmm: 'MMM'
} as const satisfies Record<Tag, string>

export const tagColors = {
  incrementality: 'blue',
  mmm: 'green'
} as const satisfies Record<Tag, BadgeProps['color']>
