export const statuses = ['draft', 'published'] as const
export type Status = (typeof statuses)[number]
