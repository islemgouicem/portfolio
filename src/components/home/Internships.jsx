import { useLanguage } from "../../contexts/LanguageContext"
import { internships } from "../../data/internships"

const Internships = () => {
  const { t, localize, tag, formatDate } = useLanguage()

  return (
    <section id="internships" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <h2 data-reveal className="mb-8 text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
        {t("internships.title")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {internships.map((item) => (
          <article key={item.id} data-reveal className="tile flex flex-col p-8">
            <p className="mono-label mb-4">
              {formatDate(item.start)} – {item.end ? formatDate(item.end) : t("internships.present")}
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{localize(item.role)}</h3>
            <p className="mt-1 font-semibold text-gold-700 dark:text-gold-400">{item.company}</p>
            <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">{localize(item.context)}</p>
            <ul className="mb-6 space-y-3">
              {localize(item.points).map((point) => (
                <li key={point} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2">
              {item.tags.map((name) => (
                <span key={name} className="chip !text-xs !px-2.5 !py-0.5">{tag(name)}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Internships
