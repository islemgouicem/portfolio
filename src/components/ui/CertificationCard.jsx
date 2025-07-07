"use client"

import { motion } from "framer-motion"
import { ExternalLink, CheckCircle, Calendar } from "lucide-react"
import { useInView } from "react-intersection-observer"
import PropTypes from "prop-types"

const CertificationCard = ({ certification, delay = 0 }) => {
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
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
    >
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <img
          src={certification.image || "/placeholder.svg"}
          alt={certification.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{certification.date}</span>
          </div>
          {certification.verified && (
            <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          )}
        </div>

        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {certification.title}
        </h3>

        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{certification.issuer}</p>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{certification.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
        >
          <span>View Credential</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}
CertificationCard.propTypes = {
  certification: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    verified: PropTypes.bool,
    issuer: PropTypes.string.isRequired,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    credentialUrl: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.number,
}

export default CertificationCard
