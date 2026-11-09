import { ExternalLink, Github } from "lucide-react"
import PropTypes from "prop-types"
import logo from "../../assets/logo.png"
import { useLanguage } from "../../contexts/LanguageContext"

const linkClass =
  "p-2 rounded-lg transition-colors text-zinc-500 dark:text-zinc-400 hover:bg-gold-500/15 hover:text-gold-700 dark:hover:text-gold-300"

export const ProjectImage = ({ project }) => (
  <div data-wipe style={{ background: project.background }} className="relative aspect-video overflow-hidden bg-platinum-100 dark:bg-obsidian-900">
    {project.image ? (
      <div data-parallax className="absolute inset-x-0 -top-[8%] h-[116%]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out ${
            project.fit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
      </div>
    ) : (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-obsidian-900 via-obsidian-800 to-gold-950">
        <img src={logo} alt="" className="h-20 w-auto opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" />
      </div>
    )}
  </div>
)

export const ProjectLinks = ({ project }) => {
  const { t } = useLanguage()
  return (
  <div className="flex space-x-2 flex-shrink-0">
    {project.github && (
      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} ${t("projects.code")}`} className={linkClass}>
        <Github className="h-4 w-4" />
      </a>
    )}
    {project.demo && (
      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} ${t("projects.live")}`} className={linkClass}>
        <ExternalLink className="h-4 w-4" />
      </a>
    )}
  </div>
  )
}

const projectShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  fit: PropTypes.string,
  background: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string,
  demo: PropTypes.string,
})

ProjectImage.propTypes = { project: projectShape.isRequired }
ProjectLinks.propTypes = { project: projectShape.isRequired }

const ProjectCard = ({ project }) => {
  const { tag } = useLanguage()
  return (
    <div
      data-reveal
      className="tile overflow-hidden hover:-translate-y-1 hover:border-gold-500/40 dark:hover:border-gold-500/40 transition-[transform,border-color] duration-300 group"
    >
      <ProjectImage project={project} />

      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((name) => (
              <span key={name} className="font-mono text-xs text-gold-700 dark:text-gold-400">
                {tag(name)}
              </span>
            ))}
          </div>
          <ProjectLinks project={project} />
        </div>

        <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(2).map((name) => (
            <span key={name} className="chip !text-xs !px-2.5 !py-0.5">
              {tag(name)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = { project: projectShape.isRequired }

export default ProjectCard
