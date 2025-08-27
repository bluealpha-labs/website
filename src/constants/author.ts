export const authors = ['matthias', 'peter'] as const
export type Author = (typeof authors)[number]

export const authorNames = {
  matthias: 'Matthias Stepancich',
  peter: 'Peter Grafe'
} as const satisfies Record<Author, string>

export const authorImages = {
  matthias: '/images/authors/matthias.png',
  peter: '/images/authors/peter.png'
} as const satisfies Record<Author, string>
