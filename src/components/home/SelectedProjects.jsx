import { Link } from "react-router-dom"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"
import { useSelectedProjects } from "../../data/projects"

const SelectedProjects = () => {
  const { t, tag } = useLanguage()
  const selected = useSelectedProjects()

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex items-end justify-between gap-6 mb-8">
        <h2 data-reveal className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          {t("selected.title")}
        </h2>
        <Link data-reveal to="/projects" className="group flex flex-shrink-0 items-center gap-2 font-semibold text-gold-700 dark:text-gold-400">
          <span>{t("selected.all")}</span>
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:h-[76vh]">
        {selected.map((project, index) => (
          <a
            key={project.id}
            href={project.demo || project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-wipe
            style={{ background: project.background }}
            className={`group relative overflow-hidden rounded-3xl bg-obsidian-900 aspect-video lg:aspect-auto ${
              index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"
            }`}
          >
            <div data-parallax className="absolute inset-x-0 -top-[8%] h-[116%]" style={{ top: project.tileTop }}>
              <img
                src={project.image}
                alt=""
                loading="lazy"
                className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                  project.fit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <div>
                <p className="mb-1 font-mono text-xs text-gold-300">{project.tags.slice(0, 3).map(tag).join(" / ")}</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{project.title}</h3>
              </div>
              <ArrowUpRight className="h-6 w-6 flex-shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default SelectedProjects
