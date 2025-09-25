import type { BadgeProps } from '#components/badge.tsx'
import { BeehiivIcon } from '#components/logos/beehiiv.tsx'
import { Klover } from '#components/logos/klover.tsx'
import { Pettable } from '#components/logos/pettable.tsx'
import type { ComponentType, SVGProps } from 'react'

export const companies = ['beehiiv', 'klover', 'pettable'] as const
export type Company = (typeof companies)[number]

export const tags = ['incrementality', 'mmm'] as const
export type Tag = (typeof tags)[number]

export const companyNames = {
  beehiiv: 'Beehiiv',
  klover: 'Klover',
  pettable: 'Pettable'
} as const satisfies Record<Company, string>

export const companyLogos = {
  beehiiv: BeehiivIcon,
  klover: Klover,
  pettable: Pettable
} as const satisfies Record<Company, ComponentType<SVGProps<SVGSVGElement>>>

export const tagNames = {
  incrementality: 'Incrementality',
  mmm: 'Marketing Mix Modeling'
} as const satisfies Record<Tag, string>

export const tagColors = {
  incrementality: 'blue',
  mmm: 'indigo'
} as const satisfies Record<Tag, BadgeProps['color']>
