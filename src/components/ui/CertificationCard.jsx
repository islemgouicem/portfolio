import { ExternalLink, CheckCircle, Calendar } from "lucide-react"
import PropTypes from "prop-types"
import logo from "../../assets/logo.png"
import { useLanguage } from "../../contexts/LanguageContext"

const CertificationCard = ({ certification }) => {
  const { t, tag, formatDate } = useLanguage()
  return (
    <div
      data-reveal
      className="tile overflow-hidden hover:-translate-y-1 hover:border-gold-500/40 dark:hover:border-gold-500/40 transition-[transform,border-color] duration-300 group"
    >
      <div className="aspect-video overflow-hidden bg-platinum-100 dark:bg-obsidian-900">
        {certification.image ? (
          <img
            src={certification.image}
            alt={certification.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="flex h-full items-center justify-center gap-4 bg-gradient-to-br from-obsidian-900 via-obsidian-800 to-gold-950">
            <img src={logo} alt="" className="h-12 w-auto opacity-80" />
            <span className="text-2xl font-bold tracking-tight text-white">{certification.issuer}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
            <span className="text-sm text-zinc-600 dark:text-zinc-400">{formatDate(certification.date)}</span>
          </div>
          {certification.verified && (
            <div className="flex items-center space-x-1 text-gold-600 dark:text-gold-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs font-medium">{t("certifications.verified")}</span>
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
          {certification.title}
        </h3>

        <p className="text-gold-600 dark:text-gold-400 font-medium mb-4">{certification.issuer}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {certification.skills.map((skill) => (
            <span key={skill} className="chip !text-xs !px-2.5 !py-0.5">
              {tag(skill)}
            </span>
          ))}
        </div>

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-medium text-sm"
          >
            <span>{t("certifications.view")}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  )
}

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    verified: PropTypes.bool,
    issuer: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    credentialUrl: PropTypes.string,
  }).isRequired,
}

export default CertificationCard
