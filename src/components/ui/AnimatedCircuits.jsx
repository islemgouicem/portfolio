import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const mainBuses = [
  "M0,60 H150 L170,80 H300",
  "M0,100 H200 L220,120 H400 L420,100 H600 L620,120 H800",
  "M0,140 H180 L200,160 H380",
  "M0,180 H160 L180,200 H360 L380,180 H500",
  "M0,220 H160 L180,240 H360",
  "M0,260 H140 L160,280 H340 L360,260 H540 L560,280 H800",
  "M0,300 H100",
]

const verticalConnects = [
  "M170,80 V120",
  "M220,120 V160",
  "M420,100 V140",
  "M620,120 V160",
  "M200,160 V200",
  "M380,180 V220",
  "M160,240 V280",
  "M560,280 V320",
  "M140,60 V100",
  "M300,80 V120",
]

const busNodes = [
  [170, 80], [300, 80], [220, 120], [420, 100], [620, 120],
  [200, 160], [380, 180], [160, 240], [560, 280], [140, 60],
]

// A few data pulses travelling along the long buses.
const packets = [
  { path: mainBuses[1], duration: 5, begin: 2 },
  { path: mainBuses[5], duration: 6, begin: 3 },
  { path: mainBuses[3], duration: 4.5, begin: 4 },
  { path: mainBuses[1], duration: 5, begin: 5 },
]

// eslint-disable-next-line react/prop-types
const AnimatedCircuits = ({ className = "" }) => {
  const root = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const draw = (selector, vars) =>
        gsap.fromTo(selector, { strokeDashoffset: 1, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, ease: "power2.inOut", ...vars })
      draw("[data-bus]", { duration: 2.2, stagger: 0.14 })
      draw("[data-connect]", { duration: 1, stagger: 0.05, delay: 1.2 })
      gsap.from("[data-node]", { opacity: 0, scale: 0, transformOrigin: "center", duration: 0.5, stagger: 0.06, delay: 1.8, ease: "back.out(2)" })
    }, root)
    return () => media.revert()
  }, [])

  return (
    <div ref={root} data-circuits className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="busGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#92400e" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.8" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#busGradient)" strokeWidth="0.3" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {mainBuses.map((path) => (
          <path
            key={path}
            data-bus
            d={path}
            pathLength="1"
            strokeDasharray="1"
            fill="none"
            stroke="url(#busGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {verticalConnects.map((path) => (
          <path key={path} data-connect d={path} pathLength="1" strokeDasharray="1" fill="none" stroke="url(#busGradient)" strokeWidth="2" strokeLinecap="round" />
        ))}

        {busNodes.map(([x, y]) => (
          <circle key={`${x}-${y}`} data-node cx={x} cy={y} r="3" fill="url(#activeGradient)" />
        ))}

        {packets.map((packet) => (
          <circle key={`${packet.begin}`} r="2.4" fill="#fcd34d" opacity="0">
            <animateMotion dur={`${packet.duration}s`} begin={`${packet.begin}s`} repeatCount="indefinite" path={packet.path} />
            <animate attributeName="opacity" dur={`${packet.duration}s`} begin={`${packet.begin}s`} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1" />
          </circle>
        ))}
      </svg>
    </div>
  )
}

export default AnimatedCircuits
