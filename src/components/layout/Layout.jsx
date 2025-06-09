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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-neural-50/30 to-cyber-50/30 dark:from-slate-900 dark:via-neural-950/50 dark:to-cyber-950/50 transition-colors duration-500">
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
