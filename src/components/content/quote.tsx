type Props = {
  quote: string
  author: string
  title: string
}

export function Quote({ quote, author, title }: Props) {
  return (
    <figure>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <figcaption>
        — {author}, <cite>{title}</cite>
      </figcaption>
    </figure>
  )
}
