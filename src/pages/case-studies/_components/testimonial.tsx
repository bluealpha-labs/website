export type TestimonialProps = {
  quote: string
  name: string
  title: string
  avatar: string
}

export const Testimonial = ({ quote, name, title, avatar }: TestimonialProps) => {
  return (
    <section className='rounded-3xl bg-stone-100 py-8 md:py-12'>
      <div className='mx-auto max-w-2xl px-4 md:px-8'>
        <figure className='flex w-full shrink-0 snap-start flex-col gap-8 text-center'>
          <blockquote className='text-primary text-sm font-medium md:text-lg'>{quote}</blockquote>
          <figcaption className='flex justify-center'>
            <div className='flex flex-col items-center gap-4'>
              <img
                src={avatar}
                alt='Beehiiv'
                className='size-16 rounded-full'
              />
              <div className='flex flex-col gap-1'>
                <p className='text-primary text-lg font-semibold'>{name}</p>
                <cite className='text-md text-tertiary not-italic'>{title}</cite>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
