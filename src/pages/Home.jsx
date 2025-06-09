"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Palette, Sparkles, Zap, Target, Users } from "lucide-react"
import { Link } from "react-router-dom"
import AnimatedBackground from "../components/ui/AnimatedBackground"
import FloatingCard from "../components/ui/FloatingCard"

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl scale-110"
                />
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-50" />
                    <div className="relative flex items-center justify-center">
                      <Code2 className="h-8 w-8 text-white absolute" />
                      <Palette className="h-6 w-6 text-white/80 absolute translate-x-2 translate-y-2" />
                      <Sparkles className="h-4 w-4 text-white/60 absolute -translate-x-2 -translate-y-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                UI/UX Designer
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">& AI Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Crafting beautiful user experiences while building intelligent systems. I bridge the gap between
              human-centered design and cutting-edge AI technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold flex items-center space-x-2 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Combining design thinking with artificial intelligence to create meaningful digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "AI Engineering",
                description:
                  "Building intelligent systems, machine learning models, and AI-powered applications that solve real-world problems.",
                gradient: "from-blue-500 to-cyan-500",
                features: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description:
                  "Creating beautiful, intuitive interfaces with a focus on user experience and accessibility.",
                gradient: "from-purple-500 to-pink-500",
                features: ["User Research", "Prototyping", "Design Systems", "Interaction Design"],
              },
              {
                icon: Sparkles,
                title: "AI-Powered Design",
                description:
                  "Leveraging AI to enhance design workflows and create smarter, more personalized user experiences.",
                gradient: "from-green-500 to-teal-500",
                features: ["Design Automation", "Personalization", "Smart Interfaces", "Data-Driven Design"],
              },
            ].map((feature, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="p-8 text-center h-full">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {feature.features.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projects Completed", icon: Target },
                { number: "3+", label: "Years Experience", icon: Zap },
                { number: "15+", label: "AI Models Built", icon: Code2 },
                { number: "100%", label: "Client Satisfaction", icon: Users },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
