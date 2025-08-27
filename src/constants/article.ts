export const tags = ['incrementality', 'mmm'] as const
export type Tag = (typeof tags)[number]

export const tagNames = {
  incrementality: 'Incrementality',
  mmm: 'Marketing Mix Modeling'
} as const satisfies Record<Tag, string>

export const tagColors = {
  incrementality: 'green',
  mmm: 'blue'
} as const satisfies Record<Tag, string>
