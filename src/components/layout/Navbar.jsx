"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon, Code2 } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/certifications", label: "Certifications" },
    { path: "/resume", label: "Resume" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-obsidian-950/90 backdrop-blur-xl shadow-luxury border-b border-platinum-200/50 dark:border-obsidian-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="relative w-10 h-10 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 rounded-2xl flex items-center justify-center shadow-luxury"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-2xl blur opacity-50" />
                <div className="relative flex items-center justify-center">
                  <Code2 className="h-4 w-4 text-white absolute" />
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-gold-600 via-gold-700 to-gold-800 bg-clip-text text-transparent">
                Islem GCM
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 -mt-1">Powered by code, Shaped by design</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-900/20"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-platinum-50 dark:hover:bg-obsidian-800/50"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-silver-500/10 rounded-xl border border-gold-200 dark:border-gold-800"
                  />
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 p-2.5 rounded-xl bg-platinum-100 dark:bg-obsidian-800 hover:bg-platinum-200 dark:hover:bg-obsidian-700 transition-colors shadow-sm"
            >
              {isDark ? <Sun className="h-5 w-5 text-gold-500" /> : <Moon className="h-5 w-5 text-zinc-600" />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-platinum-100 dark:bg-obsidian-800 hover:bg-platinum-200 dark:hover:bg-obsidian-700 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5 text-gold-500" /> : <Moon className="h-5 w-5 text-zinc-600" />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-platinum-100 dark:bg-obsidian-800 hover:bg-platinum-200 dark:hover:bg-obsidian-700 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-zinc-600 dark:text-zinc-300" />
              ) : (
                <Menu className="h-6 w-6 text-zinc-600 dark:text-zinc-300" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0 }} className="md:hidden overflow-hidden">
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  location.pathname === item.path
                    ? "text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-900/20"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-platinum-50 dark:hover:bg-obsidian-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
