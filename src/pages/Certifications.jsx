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
      image: "./ml_spes.PNG?height=200&width=300",
      description:
        "Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/O0BB7JL5J0TY",
      verified: true,
    },
    {
      id: 2,
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2024",
      image: "./unsupervisedlr_reco_rl.PNG", // Save this image in your /public folder
      description:
        "Specialized course exploring clustering, dimensionality reduction, recommender systems, and reinforcement learning techniques to build intelligent applications.",
      skills: [
        "Unsupervised Learning",
        "Recommender Systems",
        "Reinforcement Learning",
        "TensorFlow"
      ],
      credentialUrl: "https://coursera.org/share/c38605a0d1f7eaa59f2a79ab90eb408c", // Replace with your real credential URL once you complete it
      verified: true,
    },
    {
      id: 3,
      title: "Relational Database Certification",
      issuer: "freeCodeCamp",
      date: "2024",
      image: "./relational_db.PNG", // save this image in your /public folder
      description:
        "Comprehensive certification covering SQL, PostgreSQL, and the fundamentals of working with relational databases, including designing schemas, managing data, and writing complex queries.",
      skills: [
        "SQL",
        "PostgreSQL",
        "Database Design",
        "Data Modeling",
        "Bash"
      ],
      credentialUrl: "https://freecodecamp.org/certification/fcca84b3f7e-c71e-4661-b1c3-ef0b801be95b/relational-database-v8", // replace with your real freeCodeCamp certificate URL
      verified: true,
    },
    {
      id: 4,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University (Coursera)",
      date: "2024",
      image: "./supervised.PNG", // Save your certificate image in /public/
      description:
        "Introductory course in supervised learning covering linear and logistic regression, gradient descent, and model evaluation techniques using real-world data.",
      skills: [
        "Supervised Learning",
        "Linear Regression",
        "Logistic Regression",
        "Gradient Descent",
        "Python",
        "Model Evaluation"
      ],
      credentialUrl: "https://coursera.org/share/aa23900843e2a2e9125946990538a177", // Replace with your actual Coursera certificate link
      verified: true,
    },
    {
      id: 5,
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "2024",
      image: "./responsive_web_design.PNG", // Save this certificate image in your /public/ folder
      description:
        "Certification covering HTML, CSS, Flexbox, Grid, and the principles of building modern, responsive websites that adapt seamlessly to different devices and screen sizes.",
      skills: [
        "HTML",
        "CSS",
        "Responsive Design",
      ],
      credentialUrl: "https://freecodecamp.org/certification/fcca84b3f7e-c71e-4661-b1c3-ef0b801be95b/responsive-web-design", // Replace with your real freeCodeCamp certificate URL
      verified: true,
    },
    {
      id: 6,
      title: "JavaScript Algorithms and Data Structures Certification",
      issuer: "freeCodeCamp",
      date: "2024",
      image: "./js.PNG", // Save this certificate image in your /public/ folder
      description:
        "Certification covering fundamental and advanced concepts of JavaScript, including ES6, regular expressions, data structures, algorithms, and problem-solving skills essential for web development.",
      skills: [
        "JavaScript",
        "Algorithms",
        "Data Structures",
        "ES6",
        "Debugging",
        "Problem Solving"
      ],
      credentialUrl: "https://freecodecamp.org/certification/fcca84b3f7e-c71e-4661-b1c3-ef0b801be95b/javascript-algorithms-and-data-structures-v8", // Replace with your actual freeCodeCamp certificate URL
      verified: true,
    },
    {
      id: 7,
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2024",
      image: "./advanced_algos.jpeg", // Save this certificate image in your /public/ folder
      description:
        "Course focused on advanced machine learning concepts, including neural networks, hyperparameter tuning, regularization techniques, and strategies for building high-performance ML models.",
      skills: [
        "Neural Networks",
        "Regularization",
        "Hyperparameter Tuning",
        "Machine Learning",
        "Python",
        "Model Optimization"
      ],
      credentialUrl: "https://coursera.org/share/03ecac1d6b3a15616e2ea6f7ec00e958", // Replace with your actual Coursera certificate link
      verified: true,
    }






    // {
    //   id: 2,
    //   title: "Google UX Design Certificate",
    //   issuer: "Google (Coursera)",
    //   date: "2023",
    //   image: "/placeholder.svg?height=200&width=300",
    //   description: "Complete UX design process from user research to prototyping and testing.",
    //   skills: ["UX Design", "Figma", "User Research", "Prototyping"],
    //   credentialUrl: "#",
    //   verified: true,
    // },
    // {
    //   id: 3,
    //   title: "Deep Learning Specialization",
    //   issuer: "DeepLearning.AI",
    //   date: "2024",
    //   image: "/placeholder.svg?height=200&width=300",
    //   description: "Advanced deep learning concepts including CNNs, RNNs, and sequence models.",
    //   skills: ["Deep Learning", "CNN", "RNN", "PyTorch"],
    //   credentialUrl: "#",
    //   verified: true,
    // },
    // {
    //   id: 4,
    //   title: "AWS Certified Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   image: "/placeholder.svg?height=200&width=300",
    //   description: "Foundational understanding of AWS cloud services and architecture.",
    //   skills: ["AWS", "Cloud Computing", "DevOps"],
    //   credentialUrl: "#",
    //   verified: true,
    // },
    // {
    //   id: 5,
    //   title: "React Developer Certification",
    //   issuer: "Meta (Facebook)",
    //   date: "2023",
    //   image: "/placeholder.svg?height=200&width=300",
    //   description: "Advanced React concepts including hooks, context, and performance optimization.",
    //   skills: ["React", "JavaScript", "Frontend Development"],
    //   credentialUrl: "#",
    //   verified: true,
    // },
    // {
    //   id: 6,
    //   title: "Adobe Certified Expert",
    //   issuer: "Adobe",
    //   date: "2022",
    //   image: "/placeholder.svg?height=200&width=300",
    //   description: "Expertise in Adobe Creative Suite for professional design work.",
    //   skills: ["Adobe Photoshop", "Illustrator", "XD", "Design"],
    //   credentialUrl: "#",
    //   verified: true,
    // },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-600 via-silver-600 to-platinum-600 bg-clip-text text-transparent">
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
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-600 to-silver-600 bg-clip-text text-transparent mb-2">
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
          className="bg-gradient-to-r from-platinum-50 to-gold-50 dark:from-obsidian-900/20 dark:to-gold-900/20 rounded-2xl p-8 md:p-12"
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
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 mb-4">
                  <Award className="h-6 w-6 mr-2 text-white" />
                </div>
                Current Focus
              </h3>
              <ul className="space-y-3">
                {[
                  "Deep Learning & Machine Learning",
                  "Mobile App Development",
                  "Web Development & Modern Frameworks",
                  "AI Fundamentals & Applied AI",
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
