"use client"

import { motion } from "framer-motion"
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react"

const Resume = () => {
  const handleDownload = () => {
    // Create a simple PDF-like content for download
    const resumeContent = `
JOHN DOE - AI STUDENT & DESIGNER
Email: john.doe@email.com | Phone: (555) 123-4567
Portfolio: www.johndoe.dev | GitHub: github.com/johndoe

EDUCATION
Bachelor of Science in Artificial Intelligence (Expected 2025)
University of Technology

EXPERIENCE
Freelance UI/UX Designer (2022 - Present)
- Designed 20+ web and mobile applications
- Collaborated with clients to create user-centered designs
- Specialized in AI-powered design tools

AI Research Assistant (2023 - Present)
University AI Lab
- Developed machine learning models for image classification
- Published research on neural network optimization
- Mentored junior students in AI concepts

SKILLS
Technical: Python, JavaScript, React, TensorFlow, PyTorch, Figma, Adobe Creative Suite
AI/ML: Machine Learning, Deep Learning, Computer Vision, NLP
Design: UI/UX Design, Prototyping, Design Systems, User Research

CERTIFICATIONS
- Machine Learning Specialization (Stanford/Coursera)
- Google UX Design Certificate
- Deep Learning Specialization (DeepLearning.AI)
- AWS Certified Cloud Practitioner
    `

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "John_Doe_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume
          </h1>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
        >
          {/* Personal Info */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">John Doe</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">AI Student & Creative Designer</p>
              <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>john.doe@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>www.johndoe.dev</span>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Summary</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Passionate AI student and creative designer with 3+ years of experience in UI/UX design and machine
              learning. Skilled in developing intelligent systems and creating beautiful, user-centered interfaces.
              Committed to bridging the gap between artificial intelligence and human-centered design to create
              meaningful digital experiences.
            </p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Bachelor of Science in Artificial Intelligence
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">University of Technology</p>
              <p className="text-gray-600 dark:text-gray-400">Expected Graduation: May 2025 | GPA: 3.8/4.0</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Data
                Structures, Algorithms
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
            <div className="space-y-8">
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Freelance UI/UX Designer</h4>
                <p className="text-purple-600 dark:text-purple-400 font-medium">Self-Employed | 2022 - Present</p>
                <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>• Designed 20+ web and mobile applications for various clients</li>
                  <li>• Collaborated with development teams to implement pixel-perfect designs</li>
                  <li>• Specialized in creating AI-powered design tools and interfaces</li>
                  <li>• Increased client satisfaction rates by 95% through user-centered design approach</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">AI Research Assistant</h4>
                <p className="text-green-600 dark:text-green-400 font-medium">University AI Lab | 2023 - Present</p>
                <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>• Developed machine learning models for image classification with 92% accuracy</li>
                  <li>• Published research on neural network optimization techniques</li>
                  <li>• Mentored 5 junior students in AI concepts and programming</li>
                  <li>• Collaborated on interdisciplinary projects combining AI and design</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Design Intern</h4>
                <p className="text-yellow-600 dark:text-yellow-400 font-medium">TechStart Inc. | Summer 2022</p>
                <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                  <li>• Created wireframes and prototypes for mobile application redesign</li>
                  <li>• Conducted user research and usability testing sessions</li>
                  <li>• Contributed to the company's design system documentation</li>
                  <li>• Improved app user engagement by 30% through design improvements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Programming & AI</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Python</li>
                  <li>• JavaScript/TypeScript</li>
                  <li>• TensorFlow/PyTorch</li>
                  <li>• Scikit-learn</li>
                  <li>• OpenCV</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Design Tools</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Figma</li>
                  <li>• Adobe Creative Suite</li>
                  <li>• Sketch</li>
                  <li>• Principle</li>
                  <li>• InVision</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Development</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• React/Next.js</li>
                  <li>• Node.js</li>
                  <li>• HTML/CSS</li>
                  <li>• Git/GitHub</li>
                  <li>• AWS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Projects</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">AI-Powered Design Assistant</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Developed an intelligent design tool using machine learning to suggest color palettes, layouts, and
                  typography based on content analysis. Built with Python, TensorFlow, and React.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Smart E-commerce Platform</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Designed and prototyped a modern e-commerce platform with AI-driven product recommendations and
                  intuitive user experience. Increased conversion rates by 25% in user testing.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Neural Network Visualizer</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Created an interactive tool for visualizing neural network architectures and training processes. Used
                  by 500+ students for educational purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Machine Learning Specialization (Stanford/Coursera)",
                "Google UX Design Certificate",
                "Deep Learning Specialization (DeepLearning.AI)",
                "AWS Certified Cloud Practitioner",
                "React Developer Certification (Meta)",
                "Adobe Certified Expert",
              ].map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
