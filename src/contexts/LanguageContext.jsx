import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { frenchTags, translations } from "../i18n/translations"

const LanguageContext = createContext()

const initialLanguage = () => {
  try {
    const saved = localStorage.getItem("lang")
    if (saved === "en" || saved === "fr") return saved
  } catch {
    // Storage can be blocked; fall through to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en"
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider")
  return context
}

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem("lang", lang)
    } catch {
      // The choice still applies for this visit.
    }
  }, [lang])

  const t = useCallback((key) => translations[lang][key] ?? translations.en[key] ?? key, [lang])

  // Picks the right side of a { en, fr } value; plain strings pass through.
  const localize = useCallback((value) => (value && typeof value === "object" ? value[lang] : value), [lang])

  const tag = useCallback((name) => (lang === "fr" ? frenchTags[name] ?? name : name), [lang])

  // Accepts "2026-09" or "2024".
  const formatDate = useCallback(
    (value) => {
      if (!value.includes("-")) return value
      const label = new Intl.DateTimeFormat(lang, { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}-01T00:00:00Z`))
      return label.charAt(0).toUpperCase() + label.slice(1)
    },
    [lang]
  )

  const value = useMemo(() => ({ lang, setLang, t, localize, tag, formatDate }), [lang, t, localize, tag, formatDate])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
