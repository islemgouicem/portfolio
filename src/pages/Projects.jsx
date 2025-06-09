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
      title: "AI-Powered Design Assistant",
      description:
        "An intelligent design tool that suggests color palettes, layouts, and typography based on content analysis.",
      image: "/placeholder.svg?height=300&width=400",
      category: "ai",
      tags: ["Machine Learning", "React", "Python", "Design"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Smart E-commerce Platform",
      description: "A modern e-commerce platform with AI-driven product recommendations and intuitive user experience.",
      image: "/placeholder.svg?height=300&width=400",
      category: "design",
      tags: ["UI/UX", "Figma", "React", "Node.js"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Neural Network Visualizer",
      description:
        "Interactive tool for visualizing and understanding neural network architectures and training processes.",
      image: "/placeholder.svg?height=300&width=400",
      category: "ai",
      tags: ["Deep Learning", "D3.js", "Python", "TensorFlow"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Clean and secure mobile banking interface with focus on accessibility and user experience.",
      image: "/placeholder.svg?height=300&width=400",
      category: "design",
      tags: ["Mobile Design", "Figma", "Prototyping"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Sentiment Analysis Dashboard",
      description: "Real-time sentiment analysis of social media data with beautiful data visualizations.",
      image: "/placeholder.svg?height=300&width=400",
      category: "ai",
      tags: ["NLP", "React", "Python", "Data Viz"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Design System Library",
      description: "Comprehensive design system with reusable components and design tokens for consistent branding.",
      image: "/placeholder.svg?height=300&width=400",
      category: "design",
      tags: ["Design Systems", "Figma", "Documentation"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const filterOptions = [
    { value: "all", label: "All Projects", icon: Filter },
    { value: "ai", label: "AI Projects", icon: Brain },
    { value: "design", label: "Design Projects", icon: Palette },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work in AI development and creative design
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
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === option.value
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md"
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
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Projects</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
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
          className="text-center mt-20 p-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Interested in collaborating?</h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Let's create something amazing together</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
