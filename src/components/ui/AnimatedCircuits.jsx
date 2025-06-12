"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const AnimatedCircuits = ({ className = "" }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // More complex horizontal buses with realistic branches and varying lengths
    const mainBuses = [
        "M0,60 H150 L170,80 H300", // short branch
        "M0,100 H200 L220,120 H400 L420,100 H600 L620,120 H800", // main data bus
        "M0,140 H180 L200,160 H380", // partial bus
        "M0,180 H160 L180,200 H360 L380,180 H500", // branched bus
        "M0,220 H160 L180,240 H360", // shorter
        "M0,260 H140 L160,280 H340 L360,260 H540 L560,280 H800", // long
        "M0,300 H100", // short end
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
        { x: 170, y: 80, size: 3 },
        { x: 300, y: 80, size: 3 },
        { x: 220, y: 120, size: 3 },
        { x: 420, y: 100, size: 3 },
        { x: 620, y: 120, size: 3 },
        { x: 200, y: 160, size: 3 },
        { x: 380, y: 180, size: 3 },
        { x: 160, y: 240, size: 3 },
        { x: 560, y: 280, size: 3 },
        { x: 140, y: 60, size: 3 },
        { x: 300, y: 80, size: 3 },
    ]

    const dataPackets = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        path: mainBuses[i % mainBuses.length],
        delay: i * 0.6,
        duration: 3 + Math.random() * 2,
        size: 2 + Math.random(),
    }))

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
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
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#busGradient)" strokeWidth="0.3" opacity="0.1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {mainBuses.map((path, index) => (
                    <motion.path
                        key={`bus-${index}`}
                        d={path}
                        fill="none"
                        stroke="url(#busGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 2.5,
                            delay: index * 0.2,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {verticalConnects.map((path, index) => (
                    <motion.path
                        key={`connect-${index}`}
                        d={path}
                        fill="none"
                        stroke="url(#busGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            delay: 1.2 + index * 0.05,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {busNodes.map((node, index) => (
                    <motion.circle
                        key={`node-${index}`}
                        cx={node.x}
                        cy={node.y}
                        r={node.size}
                        fill="url(#activeGradient)"
                        filter="url(#glow)"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: 1,
                        }}
                        transition={{
                            scale: {
                                duration: 3,
                                delay: 2 + index * 0.1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            },
                            opacity: {
                                duration: 0.5,
                                delay: 2 + index * 0.1,
                                ease: "easeOut",
                            },
                        }}
                    />
                ))}

                {dataPackets.map((packet) => (
                    <motion.circle
                        key={`packet-${packet.id}`}
                        r={packet.size}
                        fill="#fcd34d"
                        filter="url(#glow)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: packet.duration,
                            delay: packet.delay,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    >
                        <animateMotion
                            dur={`${packet.duration}s`}
                            begin={`${packet.delay}s`}
                            repeatCount="indefinite"
                            path={packet.path}
                        />
                    </motion.circle>
                ))}

                {mainBuses.map((_, index) => (
                    <motion.path
                        key={`wave-${index}`}
                        d={mainBuses[index]}
                        fill="none"
                        stroke="url(#activeGradient)"
                        strokeWidth="1"
                        opacity="0.3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{
                            duration: 6,
                            delay: 3 + index * 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export default AnimatedCircuits
