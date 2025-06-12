"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Palette, Sparkles, Zap, Target, Users } from "lucide-react"
import { Link } from "react-router-dom"
import AnimatedBackground from "../components/ui/AnimatedBackground"
import AnimatedCircuits from "../components/ui/AnimatedCircuits"
import FloatingCard from "../components/ui/FloatingCard"

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section with Animated Circuits */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Circuit Background */}
        <AnimatedCircuits className="opacity-90 dark:opacity-40" />

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20 dark:via-obsidian-900/10 dark:to-obsidian-900/20" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
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
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold-500  to-platinum-600 opacity-30 blur-sm scale-100 z-0"
                />

                <div className="relative bg-white/90 dark:bg-obsidian-800/90 backdrop-blur-sm p-8 rounded-3xl shadow-luxury border border-white/20 dark:border-obsidian-700/20">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-gold-600 to-silver-400 rounded-2xl flex items-center justify-center mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-silver-300 to-platinum-200 rounded-2xl blur opacity-50" />
                    <div className="relative flex items-center justify-center">
                      <Code2 className="h-8 w-8 text-obsidian-900 absolute" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-center"
            >
              <span className="bg-gradient-to-r from-gold-600 to-platinum-700 bg-clip-text text-transparent">
                Islem GOUICEM
              </span>
              <br />
              <span className="flex justify-center items-center gap-4 mt-2">
                <span className="real-metal-text">AI</span>
                <span className="text-zinc-500 dark:text-zinc-400 font-semibold">&amp;</span>
                <div className="design-wrapper text-5xl md:text-7xl font-black leading-none">
                  <div className="design-bg">Design</div>
                  <div className="design-fg">Design</div>
                </div>
              </span>
            </motion.h1>





            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >Turning smart ideas into stunning realities<br /><span className="underline underline-offset-2 font-bold italic">powered by code, shaped by design.</span>
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
                  className="px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 text-obsidian-900 rounded-2xl font-semibold flex items-center space-x-2 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
                >
                  <span>View Portfolio</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-2xl font-semibold hover:border-gold-500 dark:hover:border-gold-400 hover:bg-gold-50 dark:hover:bg-gold-900/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Let&apos;s Connect
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
              Where Elegance Meets Intelligence
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Fusing advanced AI with refined design principles to craft seamless, high-end digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "AI Architecture",
                description:
                  "Building sophisticated AI systems with enterprise-grade performance and luxury-level attention to detail.",
                gradient: "from-gold-500 to-gold-600",
                features: ["Neural Networks", "Deep Learning", "MLOps", "AI Strategy"],
              },
              {
                icon: Palette,
                title: "Premium Design",
                description:
                  "Creating exceptional user experiences that embody luxury, sophistication, and cutting-edge innovation.",
                gradient: "from-silver-500 to-silver-600",
                features: ["Luxury UX", "Design Systems", "Brand Identity", "Premium UI"],
              },
              {
                icon: Sparkles,
                title: "Tech Innovation",
                description:
                  "Pioneering the future of AI-powered design with exclusive solutions for discerning clients.",
                gradient: "from-platinum-500 to-platinum-600",
                features: ["AI Integration", "Custom Solutions", "Tech Leadership", "Innovation"],
              },
            ].map((feature, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className="p-8 text-center h-full">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-luxury`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{feature.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {feature.features.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-platinum-100 dark:bg-obsidian-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm"
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
          <div className="bg-white/70 dark:bg-obsidian-800/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 dark:border-obsidian-700/20 shadow-luxury">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "--", label: "Premium Projects", icon: Target },
                { number: "--", label: "Years Excellence", icon: Zap },
                { number: "--", label: "AI Solutions", icon: Code2 },
                { number: "--", label: "Client Satisfaction", icon: Users },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-br from-gold-600 via-gold-500 to-silver-600 rounded-2xl">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-600 to-silver-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-400 font-medium">{stat.label}</div>
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
