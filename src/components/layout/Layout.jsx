import { useLayoutEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import gsap from "gsap"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { usePageMotion, useSmoothScroll } from "../../hooks/useMotion"
import { useLanguage } from "../../contexts/LanguageContext"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation()
  const rootRef = useRef(null)
  const mainRef = useRef(null)

  useSmoothScroll()
  const { lang } = useLanguage()
  usePageMotion(rootRef, location.pathname, lang)

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined
    const tween = gsap.from(mainRef.current, { opacity: 0, duration: 0.45, ease: "power2.out", clearProps: "opacity" })
    return () => tween.revert()
  }, [location.pathname])

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-gradient-to-br from-platinum-50 via-silver-50/30 to-gold-50/20 dark:from-obsidian-950 dark:via-obsidian-900/50 dark:to-obsidian-800/30 transition-colors duration-500"
    >
      <Navbar />
      <main ref={mainRef}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
