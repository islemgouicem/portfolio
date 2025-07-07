"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useInView } from "react-intersection-observer"
import PropTypes from "prop-types"

const ProjectCard = ({ project, delay = 0, featured = false }) => {
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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Github className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href={project.demo}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
  delay: PropTypes.number,
  featured: PropTypes.bool,
}

export default ProjectCard
