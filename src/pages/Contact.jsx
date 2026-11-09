import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, BarChart3 } from "lucide-react"
import PageTitle from "../components/ui/PageTitle"
import { useLanguage } from "../contexts/LanguageContext"

const EMAIL = "gouicemislam0@gmail.com"
const emptyForm = { name: "", email: "", subject: "", message: "" }

const fieldClass =
  "w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-obsidian-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
const labelClass = "block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"

const details = [
  { icon: Mail, label: "contact.email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "contact.phone", value: "+213 792 01 70 53", href: "tel:+213792017053" },
  { icon: MapPin, label: "contact.location", valueKey: "contact.locationValue" },
]

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/islemgouicem" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/islem-gouicem-12ab5b2a3/" },
  { icon: BarChart3, label: "Kaggle", href: "https://www.kaggle.com/islemgouicem" },
]

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm)
  const { t } = useLanguage()

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  // There is no backend, so this hands the message to the visitor's email app.
  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="min-h-screen pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <PageTitle>{t("contact.title")}</PageTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-reveal className="tile p-8">
            <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">{t("contact.send")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>{t("contact.name")}</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>{t("contact.email")}</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={fieldClass} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={labelClass}>{t("contact.subject")}</label>
                <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>{t("contact.message")}</label>
                <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className={`${fieldClass} resize-none`} />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold-500 hover:bg-gold-400 text-obsidian-950 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{t("contact.submit")}</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div data-reveal className="tile p-8">
              <div className="space-y-6">
                {details.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-500/15 rounded-xl flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{t(item.label)}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-semibold text-zinc-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors break-words">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-zinc-900 dark:text-white">{t(item.valueKey)}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="tile p-8">
              <div className="grid grid-cols-3 gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 p-4 rounded-xl border border-platinum-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div data-reveal className="tile p-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gold-500 rounded-full flex-shrink-0" />
                <span className="text-zinc-800 dark:text-zinc-200 font-medium">{t("availability")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
