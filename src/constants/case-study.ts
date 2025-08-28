import type { BadgeProps } from '#components/badge.tsx'
import { BeehiivIcon } from '#components/logos/beehiiv.tsx'
import { Pettable } from '#components/logos/pettable.tsx'
import type { ComponentType, SVGProps } from 'react'

export const companies = ['beehiiv', 'pettable'] as const
export type Company = (typeof companies)[number]

export const tags = ['incrementality', 'mmm'] as const
export type Tag = (typeof tags)[number]

export const companyNames = {
  beehiiv: 'Beehiiv',
  pettable: 'Pettable'
} as const satisfies Record<Company, string>

export const companyLogos = {
  beehiiv: BeehiivIcon,
  pettable: Pettable
} as const satisfies Record<Company, ComponentType<SVGProps<SVGSVGElement>>>

export const tagNames = {
  incrementality: 'Incrementality',
  mmm: 'MMM'
} as const satisfies Record<Tag, string>

export const tagColors = {
  incrementality: 'blue',
  mmm: 'green'
} as const satisfies Record<Tag, BadgeProps['color']>
