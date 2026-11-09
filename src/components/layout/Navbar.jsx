import { useLayoutEffect, useRef, useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"
import { useLanguage } from "../../contexts/LanguageContext"
import logo from "../../assets/logo.png"

const navItems = [
  { path: "/", label: "nav.home" },
  { path: "/projects", label: "nav.projects" },
  { path: "/certifications", label: "nav.certifications" },
  { path: "/resume", label: "nav.resume" },
]

const iconButton =
  "flex h-10 w-10 items-center justify-center rounded-xl text-zinc-600 hover:bg-platinum-100 dark:text-zinc-300 dark:hover:bg-white/10 transition-colors"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const { isDark, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const location = useLocation()
  const progress = useRef(null)
  const links = useRef(null)

  // Tucks away while reading, returns on any upward scroll.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > window.innerHeight * 1.8)
      last = y
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // The active marker slides between links.
  useLayoutEffect(() => {
    const place = () => {
      const active = links.current?.querySelector("[aria-current='page']")
      setIndicator(active ? { left: active.offsetLeft, width: active.offsetWidth, opacity: 1 } : { left: 0, width: 0, opacity: 0 })
    }
    place()
    document.fonts?.ready.then(place)
    window.addEventListener("resize", place)
    return () => window.removeEventListener("resize", place)
  }, [location.pathname, lang])

  const languageSwitch = (
    <div role="group" aria-label={t("nav.language")} className="flex rounded-lg border border-platinum-200 p-0.5 font-mono text-xs dark:border-white/10">
      {["en", "fr"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-md px-2 py-1 uppercase transition-colors ${
            lang === code ? "bg-gold-500 text-obsidian-950" : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )

  const themeButton = (
    <button onClick={toggleTheme} aria-label={t("nav.theme")} className={iconButton}>
      {isDark ? <Sun className="h-[18px] w-[18px] text-gold-400" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  )

  return (
    <nav className={`no-print fixed inset-x-0 top-4 z-50 px-4 transition-transform duration-500 ease-out ${hidden && !isOpen ? "-translate-y-[140%]" : ""}`}>
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-platinum-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-obsidian-950/70">
        <div className="flex h-14 items-center justify-between pl-4 pr-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="" className="h-7 w-auto" />
            <span className="hidden font-semibold tracking-tight text-zinc-900 dark:text-white min-[380px]:inline">Islem Gouicem</span>
          </Link>

          <div ref={links} className="relative hidden items-center md:flex">
            <span
              className="absolute bottom-0 top-0 rounded-lg bg-gold-500/15 transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
            />
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={location.pathname === item.path ? "page" : undefined}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-gold-700 dark:text-gold-300"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {languageSwitch}
            {themeButton}
            <Link to="/contact" className="hidden rounded-xl bg-gold-500 px-4 py-2 text-sm font-semibold text-obsidian-950 transition-colors hover:bg-gold-400 md:block">
              {t("nav.contact")}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} aria-label={t("nav.menu")} aria-expanded={isOpen} className={`${iconButton} md:hidden`}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="space-y-1 p-2">
              {[...navItems, { path: "/contact", label: "nav.contact" }].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                    location.pathname === item.path ? "bg-gold-500/15 text-gold-700 dark:text-gold-300" : "text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div ref={progress} className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-500" />
      </div>
    </nav>
  )
}

export default Navbar
