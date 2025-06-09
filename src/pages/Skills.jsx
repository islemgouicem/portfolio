"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Code, Database, Zap, Globe } from "lucide-react"
import SkillCard from "../components/ui/SkillCard"

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Computer Vision", level: 70 },
        { name: "TensorFlow/PyTorch", level: 85 },
        { name: "Python", level: 90 },
      ],
    },
    {
      icon: Palette,
      title: "Design",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Prototyping", level: 88 },
        { name: "Design Systems", level: 82 },
        { name: "User Research", level: 75 },
      ],
    },
    {
      icon: Code,
      title: "Development",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "React/Next.js", level: 88 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Git/GitHub", level: 90 },
        { name: "API Development", level: 75 },
      ],
    },
  ]

  const tools = [
    { name: "Figma", category: "Design", icon: "🎨" },
    { name: "VS Code", category: "Development", icon: "💻" },
    { name: "Python", category: "AI/ML", icon: "🐍" },
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "TensorFlow", category: "AI/ML", icon: "🧠" },
    { name: "Adobe XD", category: "Design", icon: "🎭" },
    { name: "Jupyter", category: "Data Science", icon: "📊" },
    { name: "Sketch", category: "Design", icon: "✏️" },
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
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and creative abilities
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              color={category.color}
              skills={category.skills}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Problem Solving",
                description: "Analytical thinking and creative solutions to complex challenges",
              },
              {
                icon: Globe,
                title: "Communication",
                description: "Clear articulation of ideas and effective collaboration",
              },
              {
                icon: Database,
                title: "Project Management",
                description: "Organized approach to planning and executing projects",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
