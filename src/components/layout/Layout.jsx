"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-silver-50/30 to-gold-50/20 dark:from-obsidian-950 dark:via-obsidian-900/50 dark:to-obsidian-800/30 transition-colors duration-500">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default Layout
