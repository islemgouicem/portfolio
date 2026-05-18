"use client"

import { motion } from "framer-motion"
import SkillCard from "../components/ui/SkillCard"
import { Brain, Palette, Code, Database, Zap, Globe } from "lucide-react";
const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      color: "from-gold-500 to-gold-700",
      skills: [
        { name: "Python", level: 90 },
        { name: "Data Science", level: 70 },
        { name: "TensorFlow/PyTorch", level: 40 },
        { name: "Machine Learning", level: 65 },
        { name: "Deep Learning", level: 45 },
        { name: "Natural Language Processing", level: 35 },
        { name: "Computer Vision", level: 35 },
      ],
    },
    {
      icon: Palette,
      title: "Design",
      color: "from-silver-500 to-silver-700",
      skills: [
        { name: "Adobe Illustrator", level: 70 },
        { name: "Adobe Photoshop", level: 50 },
        { name: "Figma", level: 65 },
        { name: "UI/UX", level: 60 },
        { name: "Web Design", level: 70 },
        { name: "Mobile Design", level: 80 },
      ],
    },
    {
      icon: Code,
      title: "Development",
      color: "from-platinum-500 to-platinum-700",
      skills: [
        { name: "HTML+CSS+JS", level: 95 },
        { name: "Flask-fastAPI+PHP", level: 80 },
        { name: "React", level: 90 },
        { name: "Tailwind+Boostrap", level: 80 },
        { name: "Node.js/Next.js", level: 80 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Flutter", level: 90 },
      ],
    },
  ]


  const tools = [
    {
      name: "Figma",
      category: "Design",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "VS Code",
      category: "Development",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Python",
      category: "AI/ML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "React",
      category: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "TensorFlow",
      category: "AI/ML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Adobe XD",
      category: "Design",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    },
    {
      name: "Jupyter",
      category: "Data Science",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
    {
      name: "Sketch",
      category: "Design",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    },
  ];


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
            Skills & Expertise
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Building with AI, design, and modern web technologies
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
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-obsidian-800/70 p-6 rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 text-center backdrop-blur-md"
              >
                <div className="flex justify-center mb-3">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{tool.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{tool.category}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Soft Skills */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
            Key Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Strategic Thinking",
                description: "Analytical approach to complex AI and design challenges",
              },
              {
                icon: Globe,
                title: "Collaboration",
                description: "Working effectively with others and communicating clearly",
              },
              {
                icon: Database,
                title: "Problem Solving",
                description: "Breaking down complex problems and finding practical solutions",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-obsidian-800 p-6 rounded-xl shadow-luxury text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 mb-4">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{skill.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
