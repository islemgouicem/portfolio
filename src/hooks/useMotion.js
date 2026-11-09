import { useEffect, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

gsap.registerPlugin(ScrollTrigger)

const MOTION_OK = "(prefers-reduced-motion: no-preference)"
let lenis = null

export const getLenis = () => lenis

export const scrollToTop = () => {
  if (lenis) lenis.scrollTo(0)
  else window.scrollTo(0, 0)
}

export function useSmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia(MOTION_OK).matches) return undefined

    lenis = new Lenis({ lerp: 0.1 })
    lenis.on("scroll", ScrollTrigger.update)
    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenis = null
    }
  }, [])
}

// Scroll-driven motion for anything tagged with a data attribute:
// data-line (masked title), data-reveal (fade up), data-wipe (image wipe),
// data-parallax (image drift), data-words (word-by-word fill on scroll).
export function usePageMotion(rootRef, routeKey, languageKey) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  }, [routeKey])

  useLayoutEffect(() => {
    const root = rootRef.current
    const all = (selector) => gsap.utils.toArray(selector, root)
    const media = gsap.matchMedia()

    media.add(MOTION_OK, () => {
      const lines = all("[data-line]")
      if (lines.length) {
        gsap.from(lines, { yPercent: 115, duration: 1.1, ease: "power4.out", stagger: 0.09, delay: 0.05 })
      }

      const reveals = all("[data-reveal]")
      if (reveals.length) gsap.set(reveals, { autoAlpha: 0, y: 44 })
      ScrollTrigger.batch(reveals, {
        start: "top 94%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.09,
            clearProps: "transform,opacity,visibility",
          }),
      })

      all("[data-wipe]").forEach((el) => {
        gsap.from(el, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        })
      })

      all("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          }
        )
      })

      all("[data-words]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll("[data-word]"),
          { opacity: 0.18 },
          { opacity: 1, stagger: 0.05, ease: "none", scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 58%", scrub: true } }
        )
      })
    })

    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => media.revert()
  }, [rootRef, routeKey, languageKey])
}
