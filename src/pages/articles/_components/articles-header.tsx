export type ArticlesHeaderProps = {
  label: string
  title: string
  description: string
}

export function ArticlesHeader({ label, title, description }: ArticlesHeaderProps) {
  return (
    <section className='bg-primary py-16 md:py-24'>
      <div className='max-w-container mx-auto px-4 md:px-8'>
        <div className='mx-auto flex w-full max-w-3xl flex-col items-center text-center'>
          <span className='text-brand-secondary md:text-md text-sm font-semibold'>{label}</span>
          <h2 className='text-display-md text-primary md:text-display-lg mt-3 font-semibold'>{title}</h2>
          <p className='text-tertiary mt-4 text-lg md:mt-6 md:text-xl'>{description}</p>
        </div>
      </div>
    </section>
  )
}
