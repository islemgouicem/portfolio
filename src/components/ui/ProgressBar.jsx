"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ProgressBar = ({ value, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <motion.div
        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  )
}

export default ProgressBar
