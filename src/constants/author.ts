export const authors = ['matthias', 'peter'] as const
export type Author = (typeof authors)[number]

export const authorNames = {
  matthias: 'Matthias Stepancich',
  peter: 'Peter Grafe'
} as const satisfies Record<Author, string>
