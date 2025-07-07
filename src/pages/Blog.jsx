"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("all")

  const blogPosts = [
    // {
    //   id: 1,
    //   title: "The Future of AI in Design: Trends and Predictions",
    //   excerpt:
    //     "Exploring how artificial intelligence is revolutionizing the design industry and what we can expect in the coming years.",
    //   content: "Full blog post content here...",
    //   date: "2024-01-15",
    //   readTime: "5 min read",
    //   tags: ["AI", "Design", "Future"],
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: true,
    // },
    // {
    //   id: 2,
    //   title: "Building My First Neural Network: A Journey",
    //   excerpt:
    //     "A detailed breakdown of my experience creating my first neural network from scratch and the lessons learned.",
    //   content: "Full blog post content here...",
    //   date: "2024-01-10",
    //   readTime: "8 min read",
    //   tags: ["AI", "Machine Learning", "Tutorial"],
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: false,
    // },
    // {
    //   id: 3,
    //   title: "Design Systems for AI Applications",
    //   excerpt: "How to create consistent and scalable design systems specifically for AI-powered applications.",
    //   content: "Full blog post content here...",
    //   date: "2024-01-05",
    //   readTime: "6 min read",
    //   tags: ["Design", "UI/UX", "Systems"],
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: true,
    // },
    // {
    //   id: 4,
    //   title: "Understanding Computer Vision: A Beginner's Guide",
    //   excerpt: "Breaking down complex computer vision concepts into digestible explanations with practical examples.",
    //   content: "Full blog post content here...",
    //   date: "2023-12-28",
    //   readTime: "10 min read",
    //   tags: ["AI", "Computer Vision", "Tutorial"],
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "The Psychology of Color in AI Interfaces",
    //   excerpt: "How color psychology influences user interaction with AI-powered interfaces and applications.",
    //   content: "Full blog post content here...",
    //   date: "2023-12-20",
    //   readTime: "4 min read",
    //   tags: ["Design", "Psychology", "UI/UX"],
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "My Experience at the AI Conference 2023",
    //   excerpt: "Key takeaways and insights from attending one of the biggest AI conferences of the year.",
    //   content: "Full blog post content here...",
    //   date: "2023-12-15",
    //   readTime: "7 min read",
    //   tags: ["AI", "Conference", "Experience"],
    //   image: "/placeholder.svg?height=200&width=400",
    //   featured: false,
    // },
  ]

  const allTags = ["all", ...new Set(blogPosts.flatMap((post) => post.tags))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on AI, design, and technology
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-gold-500 via-gold-600 to-gold-700 text-white"
                    : "bg-platinum-100 dark:bg-obsidian-800 text-zinc-700 dark:text-zinc-300 hover:bg-platinum-200 dark:hover:bg-obsidian-700"
                }`}
              >
                <Tag className="h-4 w-4 inline mr-1" />
                {tag === "all" ? "All Posts" : tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedTag === "all" && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-obsidian-800 rounded-xl shadow-luxury overflow-hidden hover:shadow-luxury-lg transition-shadow duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            {searchTerm || selectedTag !== "all" ? "Search Results" : "All Posts"}
          </h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">No posts found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedTag === "all" && !searchTerm ? regularPosts : filteredPosts).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-obsidian-800 rounded-xl shadow-luxury overflow-hidden hover:shadow-luxury-lg transition-shadow duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                      >
                        <span>Read</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
