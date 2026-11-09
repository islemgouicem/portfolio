import { useLayoutEffect, useRef } from "react"
import { ArrowUp, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { scrollToTop } from "../../hooks/useMotion"
import { useLanguage } from "../../contexts/LanguageContext"

const EMAIL = "gouicemislam0@gmail.com"

const pages = [
  { name: "nav.projects", path: "/projects" },
  { name: "nav.certifications", path: "/certifications" },
  { name: "nav.resume", path: "/resume" },
  { name: "nav.contact", path: "/contact" },
]

const socials = [
  { label: "GitHub", href: "https://github.com/islemgouicem" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/islem-gouicem-12ab5b2a3/" },
  { label: "Kaggle", href: "https://www.kaggle.com/islemgouicem" },
]

const linkClass = "text-zinc-600 hover:text-gold-700 dark:text-zinc-400 dark:hover:text-gold-300 transition-colors"

const Footer = () => {
  const fill = useRef(null)
  const { t } = useLanguage()

  // The outlined name fills with gold as the page reaches its end.
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        fill.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "none", scrollTrigger: { trigger: fill.current, start: "top bottom", end: "bottom bottom", scrub: true } }
      )
    })
    return () => media.revert()
  }, [])

  return (
    <footer className="no-print mt-24 overflow-hidden border-t border-platinum-200 dark:border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="mono-label mb-3">{t("availability")}</p>
            <a href={`mailto:${EMAIL}`} className="group inline-flex items-center gap-2 text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white break-all">
              {EMAIL}
              <ArrowUpRight className="h-7 w-7 flex-shrink-0 text-gold-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex gap-16">
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.path}><Link to={page.path} className={linkClass}>{t(page.name)}</Link></li>
              ))}
            </ul>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{social.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mt-12 select-none px-4 text-center" aria-hidden="true">
        <p className="whitespace-nowrap text-[12.6vw] font-extrabold leading-none tracking-[-0.045em] text-outline">Islem Gouicem</p>
        <p ref={fill} className="absolute inset-x-4 top-0 whitespace-nowrap bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 bg-clip-text text-[12.6vw] font-extrabold leading-none tracking-[-0.045em] text-transparent">
          Islem Gouicem
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <p className="font-mono text-xs text-zinc-500">© {new Date().getFullYear()} Islem Gouicem</p>
        <button onClick={scrollToTop} aria-label={t("backToTop")} className="group flex h-10 w-10 items-center justify-center rounded-xl border border-platinum-300 text-zinc-700 hover:border-gold-500 dark:border-white/15 dark:text-zinc-300">
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
