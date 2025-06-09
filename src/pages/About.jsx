"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Code, Lightbulb, Award, Users } from "lucide-react"
import FloatingCard from "../components/ui/FloatingCard"

const About = () => {
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
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about the intersection of artificial intelligence and design
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Profile Image & Info */}
          <FloatingCard>
            <div className="p-8">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">John Doe</h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">AI Student & Creative Designer</p>
              <div className="flex justify-center space-x-4">
                {[
                  { icon: Brain, color: "text-blue-500" },
                  { icon: Palette, color: "text-purple-500" },
                  { icon: Code, color: "text-green-500" },
                  { icon: Lightbulb, color: "text-yellow-500" },
                ].map(({ icon: Icon, color }, index) => (
                  <div key={index} className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                ))}
              </div>
            </div>
          </FloatingCard>

          {/* Story */}
          <FloatingCard delay={0.2}>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a passionate AI student and designer who believes in the power of technology to create beautiful,
                  meaningful experiences. My journey began with a fascination for both the logical world of artificial
                  intelligence and the creative realm of design.
                </p>
                <p>
                  Currently pursuing my studies in AI while working on various design projects, I've discovered that the
                  intersection of these fields offers incredible opportunities to solve complex problems with elegant
                  solutions.
                </p>
                <p>
                  When I'm not coding neural networks or crafting user interfaces, you'll find me exploring the latest
                  design trends, experimenting with new AI models, or contributing to open-source projects that bridge
                  the gap between technology and creativity.
                </p>
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">What Drives Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Always seeking new ways to solve problems and push boundaries.",
              },
              {
                icon: Users,
                title: "User-Centric",
                description: "Designing with empathy and focusing on user needs and experiences.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering high-quality work that makes a difference.",
              },
            ].map((value, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Journey</h3>
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2024",
                title: "Advanced AI Studies",
                description: "Diving deep into machine learning, neural networks, and AI ethics.",
              },
              {
                year: "2023",
                title: "Design Portfolio Expansion",
                description: "Completed 20+ design projects ranging from web to mobile applications.",
              },
              {
                year: "2022",
                title: "First AI Project",
                description: "Built my first machine learning model for image classification.",
              },
              {
                year: "2021",
                title: "Started Design Journey",
                description: "Began learning UI/UX design and fell in love with creating user experiences.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mx-4" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
