import { useLayoutEffect, useRef, useState } from "react"
import { Brain, Smartphone, Globe, Filter } from "lucide-react"
import gsap from "gsap"
import ProjectCard from "../components/ui/ProjectCard"
import PageTitle from "../components/ui/PageTitle"
import { useProjects } from "../data/projects"
import { useLanguage } from "../contexts/LanguageContext"

const filterOptions = [
  { value: "all", label: "projects.all", icon: Filter },
  { value: "ai", label: "projects.ai", icon: Brain },
  { value: "web", label: "projects.web", icon: Globe },
  { value: "mobile", label: "projects.mobile", icon: Smartphone },
]

const Projects = () => {
  const { t } = useLanguage()
  const projects = useProjects()
  const [filter, setFilter] = useState("all")
  const grid = useRef(null)
  const firstRender = useRef(true)

  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // Cards are revealed on scroll at first; filter changes animate them directly.
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return undefined
    }
    const tween = gsap.fromTo(
      grid.current.children,
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.05, clearProps: "transform,opacity,visibility" }
    )
    return () => tween.kill()
  }, [filter])

  return (
    <div className="min-h-screen pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <PageTitle meta={`${projects.length} ${t("projects.count")}`}>{t("projects.title")}</PageTitle>

        <div data-reveal className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              aria-pressed={filter === option.value}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium border transition-colors duration-300 ${
                filter === option.value
                  ? "bg-gold-500 border-gold-500 text-obsidian-950"
                  : "border-platinum-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-gold-500/50"
              }`}
            >
              <option.icon className="h-4 w-4" />
              <span>{t(option.label)}</span>
            </button>
          ))}
        </div>

        <div ref={grid} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
