"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// eslint-disable-next-line react/prop-types
const FloatingCard = ({ children, delay = 0, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/20 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default FloatingCard
