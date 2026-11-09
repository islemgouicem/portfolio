// eslint-disable-next-line react/prop-types
const PageTitle = ({ children, meta }) => (
  <header className="mb-12 flex items-end justify-between gap-6 border-b border-platinum-200 pb-8 dark:border-white/[0.07]">
    <h1 className="overflow-hidden pb-1 text-5xl font-extrabold tracking-tight md:text-8xl">
      <span data-line className="block text-zinc-900 dark:text-white">
        {children}
      </span>
    </h1>
    {meta && <div data-reveal className="mono-label flex-shrink-0 pb-2">{meta}</div>}
  </header>
)

export default PageTitle
