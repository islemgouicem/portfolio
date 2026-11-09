import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import PageTitle from "../components/ui/PageTitle"
import { useLanguage } from "../contexts/LanguageContext"
import { useProjects } from "../data/projects"
import { certifications } from "../data/certifications"
import { internships } from "../data/internships"

// Drop your CV at src/assets/resume.pdf and the Download button serves it.
// Until that file exists, the button prints this page instead.
const resumeFile = Object.values(import.meta.glob("../assets/resume.pdf", { eager: true, query: "?url", import: "default" }))[0]

const skills = [
  { label: "resume.aiData", value: "Python, PyTorch, TensorFlow, scikit-learn, OpenCV, Pandas, NumPy, Power BI" },
  { label: "resume.mobileWeb", value: "Flutter, React, TypeScript, Next.js, Tailwind CSS" },
  { label: "Backend", value: "FastAPI, Flask, Node.js, PostgreSQL, SQL Server, MongoDB, Supabase, Docker, Airflow, dbt" },
  { label: "Design", value: "Figma, Adobe Illustrator, Adobe Photoshop" },
]

const sectionTitle = "text-2xl font-bold text-zinc-900 dark:text-white mb-4"
const contacts = "flex items-center space-x-2 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
const downloadClass =
  "flex items-center gap-2 rounded-xl bg-gold-500 px-4 py-2.5 font-sans text-sm font-semibold normal-case tracking-normal text-obsidian-950 hover:bg-gold-400 transition-colors"

// The page prints in light mode so the PDF comes out on white.
const printResume = () => {
  const root = document.documentElement
  const wasDark = root.classList.contains("dark")
  root.classList.remove("dark")
  window.addEventListener("afterprint", () => wasDark && root.classList.add("dark"), { once: true })
  window.print()
}

const Resume = () => {
  const { t, localize, tag, formatDate } = useLanguage()
  const projects = useProjects()

  const download = (
    <>
      <Download className="h-4 w-4" />
      <span>{t("resume.download")}</span>
    </>
  )

  return (
    <div className="min-h-screen pt-32 pb-10 px-4 sm:px-6 lg:px-8 print:p-0">
      <div className="max-w-5xl mx-auto">
        <div className="no-print">
          <PageTitle
            meta={
              resumeFile ? (
                <a href={resumeFile} download="Islem_Gouicem_CV.pdf" className={downloadClass}>{download}</a>
              ) : (
                <button onClick={printResume} className={downloadClass}>{download}</button>
              )
            }
          >
            {t("resume.title")}
          </PageTitle>
        </div>

        <div data-reveal className="tile p-8 md:p-12 print:border-0 print:p-0">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">Islem GOUICEM</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">{t("resume.role")}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-zinc-600 dark:text-zinc-400">
              <a className={contacts} href="mailto:gouicemislam0@gmail.com"><Mail className="h-4 w-4" /><span>gouicemislam0@gmail.com</span></a>
              <a className={contacts} href="tel:+213792017053"><Phone className="h-4 w-4" /><span>+213 792 01 70 53</span></a>
              <span className="flex items-center space-x-2"><MapPin className="h-4 w-4" /><span>{t("resume.location")}</span></span>
              <a className={contacts} href="https://github.com/islemgouicem"><Github className="h-4 w-4" /><span>islemgouicem</span></a>
              <a className={contacts} href="https://www.linkedin.com/in/islem-gouicem-12ab5b2a3/"><Linkedin className="h-4 w-4" /><span>LinkedIn</span></a>
            </div>
          </div>

          <section className="mb-10">
            <h3 className={sectionTitle}>{t("internships.title")}</h3>
            <div className="space-y-6">
              {internships.map((item) => (
                <div key={item.id} className="border-l-4 border-gold-500 pl-6 break-inside-avoid">
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">{localize(item.role)}</h4>
                  <p className="text-gold-600 dark:text-gold-400 font-medium">
                    {item.company}, {formatDate(item.start)} – {item.end ? formatDate(item.end) : t("internships.present")}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{localize(item.context)}</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-600 dark:text-zinc-400">
                    {localize(item.points).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h3 className={sectionTitle}>{t("resume.education")}</h3>
            <div className="border-l-4 border-gold-500 pl-6">
              <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">{t("resume.degree")}</h4>
              <p className="text-gold-600 dark:text-gold-400 font-medium">{t("resume.school")}</p>
              <p className="text-zinc-600 dark:text-zinc-400">{t("resume.years")}</p>
            </div>
          </section>

          <section className="mb-10">
            <h3 className={sectionTitle}>{t("resume.projects")}</h3>
            <div className="space-y-5">
              {projects.slice(0, 7).map((project) => (
                <div key={project.id} className="border-l-4 border-gold-500 pl-6 break-inside-avoid">
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">{project.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{project.description}</p>
                  <p className="text-sm text-gold-600 dark:text-gold-400 mt-1">{project.tags.map(tag).join(", ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10 break-inside-avoid">
            <h3 className={sectionTitle}>{t("resume.skills")}</h3>
            <dl className="space-y-2">
              {skills.map((skill) => (
                <div key={skill.label} className="sm:flex">
                  <dt className="font-semibold text-zinc-900 dark:text-white sm:w-36 flex-shrink-0">{t(skill.label)}</dt>
                  <dd className="text-zinc-600 dark:text-zinc-400">{skill.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="break-inside-avoid">
            <h3 className={sectionTitle}>{t("resume.certifications")}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {certifications.map((certification) => (
                <li key={certification.title} className="text-zinc-600 dark:text-zinc-400">
                  {certification.title}, {certification.issuer}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume
