"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Palette, Filter } from "lucide-react"
import ProjectCard from "../components/ui/ProjectCard"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Algreenia Afforestation Platform",
      description:
        "Hybrid platform combining AI and community engagement for afforestation projects. Features include tree type identification, irrigation tracking, impact reporting, and volunteer management.",
      image: "./public/algreenia.PNG",
      category: "environment",
      tags: ["AI", "Web Development", "Sustainability", "React", "Node.js"],
      github: "#", // replace with actual URL
      demo: "#", // replace with actual URL
      featured: true,
    },
    {
      id: 2,
      title: "AI Job Matching System",
      description:
        "AI-powered platform that analyzes candidate profiles and job requirements to deliver precise talent matching. Features include smart resume parsing, skill-gap analysis, and personalized job recommendations for both employers and job seekers.",
      image: "./public/job_matching.png", // place this SVG or image in your /public folder
      category: "ai",
      tags: ["Web Development", "Python"],
      github: "#", // replace with your real repository URL
      demo: "#",   // replace with your live demo URL
      featured: true,
    }

  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const filterOptions = [
    { value: "all", label: "All Projects", icon: Filter },
    { value: "ai", label: "AI Solutions", icon: Brain },
    { value: "design", label: "Luxury Design", icon: Palette },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-600 via-silver-600 to-platinum-600 bg-clip-text text-transparent">
            Premium Portfolio
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Exclusive AI solutions and luxury design projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === option.value
                ? "bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 text-white shadow-luxury"
                : "bg-white dark:bg-obsidian-800 text-zinc-700 dark:text-zinc-300 hover:bg-platinum-50 dark:hover:bg-obsidian-700 shadow-md"
                }`}
            >
              <option.icon className="h-5 w-5" />
              <span>{option.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {filter === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} delay={index * 0.1} featured={true} />
                ))}
            </div>
          </motion.div>
        )}

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">
            {filter === "all" ? "All Projects" : `${filterOptions.find((o) => o.value === filter)?.label}`}
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 0.1} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-platinum-50 to-gold-50 dark:from-obsidian-900/20 dark:to-gold-900/20 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Ready for Premium Collaboration?</h3>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">Let&apos;s create something extraordinary together</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 text-white rounded-full font-semibold shadow-luxury hover:shadow-luxury-lg transition-shadow"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
