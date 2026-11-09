import CertificationCard from "../components/ui/CertificationCard"
import PageTitle from "../components/ui/PageTitle"
import { certifications } from "../data/certifications"
import { useLanguage } from "../contexts/LanguageContext"

const Certifications = () => {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <PageTitle meta={`${certifications.length} ${t("certifications.count")}`}>{t("certifications.title")}</PageTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification) => (
            <CertificationCard key={certification.title} certification={certification} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certifications
