import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import AnimatedCircuits from "../ui/AnimatedCircuits"
import { useLanguage } from "../../contexts/LanguageContext"
import logo from "../../assets/logo.png"

const REST = 52
const swatches = ["#F59E0B", "#FCD34D", "#92400E", "#27272A", "#FAFAFA"]

const Name = () => (
  <>
    <span className="block overflow-hidden md:inline-block">
      <span data-hero-word className="block pr-[0.03em]">Islem</span>
    </span>{" "}
    <span className="block overflow-hidden md:inline-block">
      <span data-hero-word className="block pr-[0.03em]">Gouicem</span>
    </span>
  </>
)

// eslint-disable-next-line react/prop-types
const Footer = ({ tech }) => {
  const { t } = useLanguage()
  return (
  <div className="absolute inset-x-0 bottom-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
    <p data-hero-fade className={`max-w-md text-lg leading-snug ${tech ? "text-zinc-200" : "text-zinc-700 dark:text-zinc-300"}`}>
      {t("hero.intro")}
    </p>
    <div data-hero-fade className="flex gap-3">
      <Link
        to="/projects"
        tabIndex={tech ? -1 : undefined}
        className={`group flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-colors ${
          tech ? "bg-gold-500 text-obsidian-950 hover:bg-gold-400" : "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-obsidian-950 dark:hover:bg-platinum-200"
        }`}
      >
        <span>{t("hero.projects")}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
      <Link
        to="/contact"
        tabIndex={tech ? -1 : undefined}
        className={`rounded-xl border px-6 py-3.5 font-semibold transition-colors ${
          tech ? "border-white/20 text-white hover:border-gold-400 hover:text-gold-300" : "border-zinc-300 text-zinc-800 hover:border-gold-500 dark:border-white/20 dark:text-white"
        }`}
      >
        {t("nav.contact")}
      </Link>
    </div>
  </div>
  )
}

// eslint-disable-next-line react/prop-types
const DesignCanvas = ({ size }) => (
  <div className="absolute inset-0 isolate bg-platinum-50 dark:bg-obsidian-900 [--outline-fill:#fafafa] dark:[--outline-fill:#18181b]">
    <div className="hero-grid absolute inset-0" />
    <div className="hero-ruler-x" />
    <div className="hero-ruler-y" />

    <svg className="absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#d97706" strokeWidth="1.25">
        <path data-pen pathLength="1" strokeDasharray="1" d="M-20,720 C 240,540 430,860 720,690 S 1180,330 1460,500" />
        <path data-pen pathLength="1" strokeDasharray="1" opacity="0.55" d="M-20,250 C 300,90 540,350 830,200 S 1250,130 1460,270" />
        <g data-pen-detail opacity="0.9">
          <line x1="560" y1="785" x2="880" y2="595" />
          <circle cx="560" cy="785" r="4" fill="#f59e0b" stroke="none" />
          <circle cx="880" cy="595" r="4" fill="#f59e0b" stroke="none" />
          <rect x="715" y="685" width="10" height="10" fill="#fafafa" />
        </g>
      </g>
    </svg>

    <div className="hidden lg:block absolute left-8 top-[13%] space-y-2" aria-hidden="true">
      <p className="mono-label mb-3">Palette</p>
      {swatches.map((hex) => (
        <div key={hex} className="flex items-center gap-2">
          <span className="h-5 w-5 rounded border border-black/10 dark:border-white/15" style={{ background: hex }} />
          <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">{hex}</span>
        </div>
      ))}
    </div>

    <div className="hidden lg:block absolute right-[5%] top-[16%] w-44" aria-hidden="true">
      <p className="mono-label mb-2">Frame 390</p>
      <div className="space-y-2 rounded-xl border border-gold-500/50 p-3">
        <div className="h-16 rounded-md bg-gold-500/15" />
        <div className="h-2 w-3/4 rounded bg-zinc-400/40" />
        <div className="h-2 w-1/2 rounded bg-zinc-400/30" />
      </div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center pb-24 md:pb-10">
      <div className="relative px-3 md:px-5">
        <h1 data-hero-name className="hero-name text-outline">
          <Name />
        </h1>
        <div data-hero-select className="pointer-events-none absolute inset-0 border border-gold-500" aria-hidden="true">
          <span className="handle -left-[5px] -top-[5px]" />
          <span className="handle -right-[5px] -top-[5px]" />
          <span className="handle -bottom-[5px] -left-[5px]" />
          <span className="handle -bottom-[5px] -right-[5px]" />
          <span className="absolute -bottom-7 left-4 whitespace-nowrap rounded bg-gold-500 px-1.5 py-0.5 font-mono text-[11px] text-obsidian-950">
            {size}
          </span>
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

const TechCanvas = () => (
  <div className="absolute inset-0 bg-[#0a0a0c]">
    <AnimatedCircuits className="opacity-70" />

    <pre className="hidden lg:block absolute left-[6%] top-[17%] font-mono text-[13px] leading-6 text-zinc-500" aria-hidden="true">
      <span className="text-gold-500"># inference</span>{"\n"}
      frame = camera.read(){"\n"}
      result = model.predict(frame){"\n"}
      api.publish(result)
    </pre>
    <pre className="hidden lg:block absolute right-[5%] top-[17%] font-mono text-[13px] leading-6 text-zinc-500" aria-hidden="true">
      <span className="text-gold-500">$</span> flutter build apk{"\n"}
      <span className="text-gold-500">$</span> uvicorn app:api{"\n"}
      <span className="text-emerald-400">ready</span> on :8000
    </pre>

    <div className="absolute inset-0 flex items-center justify-center pb-24 md:pb-10" aria-hidden="true">
      <div className="px-3 md:px-5">
        <div data-hero-name className="hero-name bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 bg-clip-text text-transparent">
          <Name />
        </div>
      </div>
    </div>

    <Footer tech />
  </div>
)

const Hero = () => {
  const root = useRef(null)
  const [size, setSize] = useState("")

  // The selection label reports the headline's real rendered size.
  useEffect(() => {
    const name = root.current.querySelector("h1")
    const observer = new ResizeObserver(([entry]) => {
      setSize(`${Math.round(entry.contentRect.width)} × ${Math.round(entry.contentRect.height)}`)
    })
    observer.observe(name)
    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    const hero = root.current
    const media = gsap.matchMedia()

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const canHover = window.matchMedia("(hover: hover)").matches
      let target = REST
      let current = 100
      let sweep = 0

      const onMove = (event) => {
        const box = hero.getBoundingClientRect()
        target = gsap.utils.clamp(6, 94, ((event.clientX - box.left) / box.width) * 100)
      }
      const onLeave = () => {
        target = REST
      }
      if (canHover) {
        hero.addEventListener("pointermove", onMove)
        hero.addEventListener("pointerleave", onLeave)
      }

      const tick = (time) => {
        if (!canHover) target = REST + Math.sin(time * 0.6) * 18
        current += (target - current) * 0.08
        hero.style.setProperty("--seam", `${(current * (1 - sweep)).toFixed(2)}%`)
      }
      gsap.ticker.add(tick)

      gsap.from("[data-hero-word]", { yPercent: 112, duration: 1.2, ease: "power4.out", stagger: 0.1, delay: 0.1 })
      gsap.from("[data-hero-select]", { opacity: 0, duration: 0.5, delay: 1.1 })
      gsap.from("[data-hero-fade]", { autoAlpha: 0, y: 20, duration: 0.8, ease: "power3.out", delay: 0.9, stagger: 0.08, clearProps: "transform,opacity,visibility" })
      gsap.from("[data-seam-knob]", { scale: 0, duration: 0.7, ease: "back.out(2)", delay: 0.7 })
      gsap.fromTo("[data-pen]", { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut", stagger: 0.2 })
      gsap.from("[data-pen-detail]", { opacity: 0, duration: 0.6, delay: 1.7 })

      // Scrolling pins the hero and sweeps the design canvas fully into code.
      gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=70%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            sweep = self.progress
          },
        },
      })
        .to("[data-hero-name]", { scale: 0.9, ease: "none" }, 0)
        .to("[data-seam-line]", { autoAlpha: 0, ease: "none", duration: 0.2 }, 0.8)

      return () => {
        gsap.ticker.remove(tick)
        hero.removeEventListener("pointermove", onMove)
        hero.removeEventListener("pointerleave", onLeave)
      }
    }, hero)

    return () => media.revert()
  }, [])

  return (
    <section ref={root} className="hero relative h-[100svh] overflow-hidden">
      <DesignCanvas size={size} />
      <div className="hero-tech absolute inset-0">
        <TechCanvas />
      </div>

      <div data-seam-line className="hero-seam pointer-events-none absolute inset-y-0 z-20 w-px bg-gold-400/80" aria-hidden="true">
        <div data-seam-knob className="absolute left-1/2 top-[24%] -translate-x-1/2 flex items-center gap-3">
          <span className="mono-label w-14 text-right !text-gold-600 dark:!text-gold-400 hidden sm:block">Design</span>
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/60 bg-obsidian-950 shadow-luxury">
            <img src={logo} alt="" className="h-8 w-auto" />
          </span>
          <span className="mono-label w-14 !text-gold-400 hidden sm:block">Code</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
