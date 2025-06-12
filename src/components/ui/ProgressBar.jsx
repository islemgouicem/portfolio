"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ value, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="w-full bg-platinum-200 dark:bg-obsidian-700 rounded-full h-2 shadow-inner">
      <motion.div
        className="h-2 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 rounded-full shadow-sm"
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  )
}

export default ProgressBar
