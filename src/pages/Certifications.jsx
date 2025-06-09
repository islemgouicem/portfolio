"use client"

import { motion } from "framer-motion"
import { Award, Calendar, CheckCircle } from "lucide-react"
import CertificationCard from "../components/ui/CertificationCard"

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2024",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
      credentialUrl: "#",
      verified: true,
    },
    {
      id: 2,
      title: "Google UX Design Certificate",
      issuer: "Google (Coursera)",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      description: "Complete UX design process from user research to prototyping and testing.",
      skills: ["UX Design", "Figma", "User Research", "Prototyping"],
      credentialUrl: "#",
      verified: true,
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2024",
      image: "/placeholder.svg?height=200&width=300",
      description: "Advanced deep learning concepts including CNNs, RNNs, and sequence models.",
      skills: ["Deep Learning", "CNN", "RNN", "PyTorch"],
      credentialUrl: "#",
      verified: true,
    },
    {
      id: 4,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      description: "Foundational understanding of AWS cloud services and architecture.",
      skills: ["AWS", "Cloud Computing", "DevOps"],
      credentialUrl: "#",
      verified: true,
    },
    {
      id: 5,
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "2023",
      image: "/placeholder.svg?height=200&width=300",
      description: "Advanced React concepts including hooks, context, and performance optimization.",
      skills: ["React", "JavaScript", "Frontend Development"],
      credentialUrl: "#",
      verified: true,
    },
    {
      id: 6,
      title: "Adobe Certified Expert",
      issuer: "Adobe",
      date: "2022",
      image: "/placeholder.svg?height=200&width=300",
      description: "Expertise in Adobe Creative Suite for professional design work.",
      skills: ["Adobe Photoshop", "Illustrator", "XD", "Design"],
      credentialUrl: "#",
      verified: true,
    },
  ]

  const stats = [
    { number: "6+", label: "Certifications" },
    { number: "4", label: "Platforms" },
    { number: "100%", label: "Verified" },
    { number: "2024", label: "Latest" },
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
            Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development in AI and design
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} certification={cert} delay={index * 0.1} />
          ))}
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Learning Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Committed to staying current with the latest technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Award className="h-6 w-6 mr-2 text-blue-600" />
                Current Focus
              </h3>
              <ul className="space-y-3">
                {[
                  "Advanced Computer Vision",
                  "Generative AI & LLMs",
                  "Design Systems at Scale",
                  "AI Ethics & Responsible AI",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-purple-600" />
                Upcoming Goals
              </h3>
              <ul className="space-y-3">
                {[
                  "TensorFlow Developer Certificate",
                  "Advanced React Patterns",
                  "Design Leadership Course",
                  "MLOps Specialization",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <div className="h-5 w-5 mr-3 border-2 border-gray-300 dark:border-gray-600 rounded" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certifications
