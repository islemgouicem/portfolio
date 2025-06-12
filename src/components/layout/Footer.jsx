"use client"

import {
  Code2,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Heart,
  ArrowUp,
  Send,
  MapPin,
  Phone,
} from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/islemgouicem", label: "GitHub", color: "hover:bg-gray-800 dark:hover:bg-gray-700" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/islem-gouicem-12ab5b2a3/", label: "LinkedIn", color: "hover:bg-[#0077B5] dark:hover:bg-[#0077B5]" },
    { icon: Instagram, href:"#",label: "Instagram", color: "hover:bg-[linear-gradient(45deg,#fdf497,#fd5949,#d6249f,#285AEB)] text-white" },
    { icon: Mail, href: "mailto:gouicemislam0@gmail.com", label: "Email", color: "hover:bg-red-500 dark:hover:bg-red-500" },
  ]

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-platinum-100 via-gold-50 to-silver-50 dark:from-obsidian-900 dark:via-gold-900/10 dark:to-silver-900/10">
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-gold-200/20 to-silver-200/20 dark:from-gold-400/10 dark:to-silver-400/10 blur-xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-slate-100 via-neural-50 to-cyber-50 dark:from-slate-900 dark:via-neural-900 dark:to-cyber-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Let&apos;s Create Something Amazing Together
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Stay updated with my latest projects, design insights, and AI innovations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-slate-200 dark:border-white/20 rounded-2xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-neural-400 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-2xl font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  <span className="hidden sm:inline">Email</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-gradient-to-r from-slate-100 via-neural-50 to-cyber-50 dark:from-slate-900 dark:via-neural-900 dark:to-cyber-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-12 h-12 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 rounded-2xl flex items-center justify-center shadow-luxury"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-neural-400 via-cyber-400 to-quantum-400 rounded-2xl blur opacity-50" />
                    <div className="relative flex items-center justify-center">
                      <Code2 className="h-5 w-5 text-white absolute" />
                    </div>
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold bg-gradient-to-r from-gold-600 via-gold-700 to-gold-800 bg-clip-text text-transparent">
                      Islem GCM
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Powered by code, Shaped by design</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-md">
                  Crafting beautiful user experiences while building intelligent systems. I bridge the gap between
                  human-centered design and cutting-edge AI technology.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <div className="p-2 bg-slate-200/50 dark:bg-white/10 rounded-xl">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>Algeria, Biskra</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <div className="p-2 bg-slate-200/50 dark:bg-white/10 rounded-xl">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span>gouicemislam0@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <div className="p-2 bg-slate-200/50 dark:bg-white/10 rounded-xl">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+213 792 01 70 53</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-neural-400 to-cyber-400 rounded-full" />
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full group-hover:bg-gold-500 transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social & Connect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyber-400 to-quantum-400 rounded-full" />
                  Let&apos;s Connect
                </h3>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center p-4 bg-slate-200/50 dark:bg-white/10 backdrop-blur-sm rounded-2xl ${color} transition-all duration-300 group border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20`}
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Follow my journey in design and AI. Let&apos;s build something incredible together!
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-slate-200/50 dark:bg-slate-900/90 backdrop-blur-sm border-t border-slate-300 dark:border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-slate-500 dark:text-slate-400 flex items-center gap-2"
              >
                © 2025 Islem GOUICEM. All rights reserved. Crafted with <Heart className="h-4 w-4 text-red-400 animate-pulse" /> 
              </motion.p>

              <div className="flex items-center gap-6">
                <button className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">
                  Privacy Policy
                </button>
                <button className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">
                  Terms of Service
                </button>

                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 group"
                  aria-label="Back to top"
                >
                  <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
