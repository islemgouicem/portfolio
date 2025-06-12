"use client"

import { motion } from "framer-motion"
import { Brain, Palette, Code, Lightbulb, Award, Users } from "lucide-react"
import FloatingCard from "../components/ui/FloatingCard"
import profilePic from '../assets/pfp.jpg'; // adjust the path as needed

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-silver-600 via-platinum-600 via-gold-500 to-gold-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Passionate about design and artificial intelligence
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Profile Image & Info */}
          <FloatingCard>
            <div className="p-8">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 p-1">
                <div className="w-full h-full rounded-full bg-platinum-200 dark:bg-obsidian-700 flex items-center justify-center">
                  <div className="rounded-full overflow-hidden">
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-4 text-zinc-900 dark:text-white">Islem GOUICEM</h2>
              <p className="text-center text-zinc-600 dark:text-zinc-400 mb-6">UI/UX Designer & AI Enginner</p>
              <div className="flex justify-center space-x-4">
                {[
                  { icon: Brain, color: "text-gold-500" },
                  { icon: Palette, color: "text-gold-600" },
                  { icon: Code, color: "text-gold-700" },
                  { icon: Lightbulb, color: "text-platinum-400" },
                ].map(({ icon: Icon, color }, index) => (
                  <div key={index} className={`p-3 rounded-full bg-platinum-100 dark:bg-obsidian-800 ${color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                ))}
              </div>
            </div>
          </FloatingCard>

          {/* Story */}
          <FloatingCard delay={0.2}>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">My Story</h3>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  Design came first. Before diving into code or AI, there was always something fascinating
                  about how things look and feel — from colors and layouts to the little details that make an
                  interface clean, modern, and balanced. I spent a lot of time playing with visuals, tweaking
                  UIs, and learning what makes a design not just look good, but work well. It wasn’t
                  about being an artist — it was about clarity, structure, and impact.
                </p>
                <p>
                  Currently crafting exclusive AI solutions while designing premium digital experiences, I&aposve discovered
                  that the intersection of these fields offers incredible opportunities to solve complex problems with
                  sophisticated, elegant solutions.
                </p>
                <p>
                  When I&aposm not architecting neural networks or crafting luxury interfaces, you&aposll find me exploring the
                  latest in premium tech, experimenting with cutting-edge AI models, or contributing to exclusive
                  projects that redefine the boundaries between technology and luxury.
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
          <h3 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">What Drives Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Pioneering the future of AI with cutting-edge solutions.",
              },
              {
                icon: Users,
                title: "Excellence",
                description: "Delivering premium experiences that exceed the highest expectations.",
              },
              {
                icon: Award,
                title: "Sophistication",
                description: "Crafting elegant solutions that embody luxury and intelligence.",
              },
            ].map((value, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">{value.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">{value.description}</p>
                </div>
              </FloatingCard>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">My Journey</h3>
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2025",
                title: "AI Projects & Web Innovation",
                description: "Developed AI-based job matching system and afforestation platform Algreenia using modern web and AI tools.",
              },
              {
                year: "2024",
                title: "Machine Learning & Design Focus",
                description: "Focused on machine learning, logic, and premium UI/UX design for impactful projects and competitions.",
              },
              {
                year: "2023",
                title: "Joined The National Higher School of AI",
                description: "Began studies at Algeria's top AI school.",
              },
              {
                year: "2023",
                title: "Baccalaureate Diploma",
                description: "Graduated with high distinction, driven by a passion for tech, logic, and innovation.",
              },
              {
                year: "2022",
                title: "Creative & Technical Discovery",
                description: "Started experimenting with design and coding",
              }

            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white dark:bg-obsidian-800 p-6 rounded-lg shadow-luxury">
                    <div className="text-sm font-semibold text-gold-600 dark:text-gold-400 mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{item.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 rounded-full flex-shrink-0 mx-4" />
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
