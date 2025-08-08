'use client'

import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="py-20 px-[clamp(24px,4vw,64px)] bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full"
            >
              <span className="text-red-600 dark:text-red-400 font-medium text-sm">
                BREAK THE AI DATA BOTTLENECK
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Challenge Frontier Models with{' '}
              <span className="text-blue-600 dark:text-blue-400">Hard STEM Data</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              Generate high-quality STEM evaluation datasets to test and improve AI model reasoning capabilities. 
              Break through the limitations of current AI training data with our comprehensive STEM question generation platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right - Isometric Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 h-96 lg:h-[500px] relative overflow-hidden">
              {/* STEM Fields Grid */}
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* Engineering */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg relative"
                >
                  <div className="absolute top-4 left-4 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    ENGINEERING
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="w-16 h-12 bg-blue-200 dark:bg-blue-800 rounded"></div>
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-500 rounded-full"></div>
                    <div className="w-10 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                </motion.div>

                {/* Biology */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg relative"
                >
                  <div className="absolute top-4 left-4 text-xs font-semibold text-green-600 dark:text-green-400">
                    BIOLOGY
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="flex space-x-2">
                      <div className="w-6 h-8 bg-green-200 dark:bg-green-800 rounded-full"></div>
                      <div className="w-6 h-8 bg-green-200 dark:bg-green-800 rounded-full"></div>
                    </div>
                    <div className="w-12 h-6 bg-blue-200 dark:bg-blue-800 rounded"></div>
                    <div className="w-8 h-8 bg-purple-200 dark:bg-purple-800 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Mathematics */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg relative"
                >
                  <div className="absolute top-4 left-4 text-xs font-semibold text-orange-600 dark:text-orange-400">
                    MATHEMATICS
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="w-10 h-10 bg-orange-200 dark:bg-orange-800 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="w-8 h-8 bg-yellow-200 dark:bg-yellow-800 rounded-full"></div>
                  </div>
                </motion.div>

                {/* Physics */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg relative"
                >
                  <div className="absolute top-4 left-4 text-xs font-semibold text-red-600 dark:text-red-400">
                    PHYSICS
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="w-10 h-10 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                    <div className="w-8 h-8 bg-red-200 dark:bg-red-800 rounded-full"></div>
                    <div className="w-12 h-6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                </motion.div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                  </marker>
                </defs>
                <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}