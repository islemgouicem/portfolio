"use client"

import { motion } from "framer-motion"
import { useParams, Link } from "react-router-dom"
import { Calendar, Clock, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"

const BlogPost = () => {
  const { id } = useParams()

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: "The Future of AI in Design: Trends and Predictions",
    content: `
      <p>Artificial Intelligence is rapidly transforming the design industry, and we're only at the beginning of this revolutionary journey. As someone who works at the intersection of AI and design, I've witnessed firsthand how these technologies are reshaping our creative processes.</p>

      <h2>The Current State of AI in Design</h2>
      <p>Today's AI design tools are already impressive. From automated layout suggestions to intelligent color palette generation, we're seeing AI assist designers in ways that were unimaginable just a few years ago. Tools like Figma's AI features, Adobe's Sensei, and emerging platforms are making design more accessible and efficient.</p>

      <h2>Emerging Trends</h2>
      <p>Several key trends are shaping the future of AI in design:</p>
      <ul>
        <li><strong>Generative Design:</strong> AI systems that can create multiple design variations based on constraints and objectives.</li>
        <li><strong>Personalized Experiences:</strong> AI that adapts interfaces in real-time based on user behavior and preferences.</li>
        <li><strong>Automated Accessibility:</strong> AI tools that ensure designs meet accessibility standards automatically.</li>
        <li><strong>Voice and Gesture Interfaces:</strong> Moving beyond traditional screens to more natural interaction methods.</li>
      </ul>

      <h2>The Human Element</h2>
      <p>While AI is becoming increasingly sophisticated, the human element in design remains irreplaceable. AI excels at processing data and generating options, but humans bring empathy, cultural understanding, and creative intuition that machines cannot replicate.</p>

      <p>The future of design lies not in AI replacing designers, but in AI augmenting human creativity. We're moving toward a collaborative model where AI handles routine tasks and provides intelligent suggestions, freeing designers to focus on strategy, storytelling, and emotional connection.</p>

      <h2>Challenges and Considerations</h2>
      <p>As we embrace AI in design, we must also address important challenges:</p>
      <ul>
        <li>Ensuring AI systems are trained on diverse, representative datasets</li>
        <li>Maintaining design authenticity and avoiding homogenization</li>
        <li>Addressing ethical considerations around AI-generated content</li>
        <li>Balancing efficiency with creative exploration</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The next five years will be crucial for AI in design. We can expect to see more sophisticated AI assistants, better integration between design tools, and new paradigms for human-AI collaboration. The designers who thrive will be those who learn to work alongside AI, leveraging its strengths while contributing their uniquely human perspectives.</p>

      <p>As we stand on the brink of this AI-driven design revolution, I'm excited about the possibilities. The future of design is not about choosing between human creativity and artificial intelligence—it's about finding the perfect harmony between both.</p>
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["AI", "Design", "Future"],
    image: "/placeholder.svg?height=400&width=800",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=50&width=50",
      bio: "AI Student & Creative Designer",
    },
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="mb-6">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blogPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{blogPost.readTime}</span>
            </div>
            <div className="flex gap-2">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{blogPost.title}</h1>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={blogPost.author.avatar || "/placeholder.svg"}
                alt={blogPost.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{blogPost.author.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{blogPost.author.bio}</p>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                <Heart className="h-5 w-5" />
                <span>24</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span>8</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
        >
          <div
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </motion.article>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 2,
                title: "Building My First Neural Network: A Journey",
                excerpt: "A detailed breakdown of my experience creating my first neural network from scratch.",
                date: "2024-01-10",
                readTime: "8 min read",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                id: 3,
                title: "Design Systems for AI Applications",
                excerpt: "How to create consistent and scalable design systems for AI-powered applications.",
                date: "2024-01-05",
                readTime: "6 min read",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default BlogPost
