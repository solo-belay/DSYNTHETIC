'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Blogs() {
  const blogs = [
    {
      title: "Understanding Typological Universals in AI Model Performance",
      description: "Explore how different AI models perform across various linguistic typologies and what this reveals about their reasoning capabilities.",
      date: "Dec 15, 2023",
      category: "Research"
    },
    {
      title: "Top 10 Model Performance Tips for STEM Evaluation",
      description: "Learn the best practices for evaluating AI models on STEM tasks and how to interpret the results effectively.",
      date: "Dec 12, 2023",
      category: "Tips"
    },
    {
      title: "What's New in ICML/NeurIPS 2023: AI Evaluation Trends",
      description: "Discover the latest trends in AI evaluation from top machine learning conferences and their implications.",
      date: "Dec 10, 2023",
      category: "Conference"
    }
  ]

  return (
    <section id="blogs" className="py-20 px-[clamp(24px,4vw,64px)] bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            BLOGS
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest insights, research findings, and best practices in AI evaluation 
            and STEM model performance.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Blog Image */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 relative">
                {/* Simulated laptop and coffee cup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-20 bg-gray-400 dark:bg-gray-500 rounded-lg relative">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-yellow-200 dark:bg-yellow-800 rounded-full"></div>
                <div className="absolute top-4 left-4 w-6 h-6 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {blog.title}
                </h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            View More Blogs
          </Button>
        </div>
      </div>
    </section>
  )
} 