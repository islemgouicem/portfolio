import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { getLenis } from "../../hooks/useMotion"

// Solid words are engineering, outlined words are design.
const words = [
  ["Python", false], ["Figma", true], ["PyTorch", false], ["UI/UX", true], ["Flutter", false],
  ["Illustrator", true], ["FastAPI", false], ["Typography", true], ["React", false], ["Motion", true],
]

const Row = () => (
  <div className="flex flex-shrink-0 items-center" aria-hidden="true">
    {words.map(([word, outline]) => (
      <span key={word} className={`px-6 text-5xl md:text-7xl font-extrabold tracking-tight ${outline ? "text-outline" : "text-zinc-900 dark:text-white"}`}>
        {word}
      </span>
    ))}
  </div>
)

// Drifts on its own, and speeds up with the scroll.
const Marquee = () => {
  const track = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined
    const wrap = gsap.utils.wrap(-50, 0)
    let position = 0
    const tick = (_, delta) => {
      const velocity = getLenis()?.velocity ?? 0
      position = wrap(position - (delta * 0.0022 + velocity * 0.03))
      gsap.set(track.current, { xPercent: position })
    }
    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [])

  return (
    <div className="overflow-hidden border-y border-platinum-200 dark:border-white/[0.07] py-6">
      <div ref={track} className="flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  )
}

export default Marquee
