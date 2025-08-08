'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CallToAction() {
  return (
    <section className="py-20 px-[clamp(24px,4vw,64px)] bg-blue-900 dark:bg-blue-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your 14-Day Free Trial
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Experience the power of comprehensive STEM evaluation datasets. No credit card required. 
            Start challenging AI models today and see the difference in reasoning capabilities.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start For Free
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
            >
              Getting Started
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Left Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-pink-100 dark:bg-pink-900/20 rounded-2xl p-8 relative"
          >
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full flex items-center justify-center"
            >
              <div className="w-8 h-8 bg-pink-600 dark:bg-pink-400 rounded"></div>
            </motion.div>
            <div className="absolute bottom-4 left-4 w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
            <div className="absolute top-8 left-8 w-8 h-8 bg-pink-300 dark:bg-pink-700 rounded-full"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Generate Evaluation Data
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create comprehensive STEM evaluation datasets that push AI models to their limits.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-blue-100 dark:bg-blue-900/20 rounded-2xl p-8 relative"
          >
            <motion.div 
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-4 right-4 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center"
            >
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded"></div>
            </motion.div>
            <div className="absolute bottom-4 left-4 w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
            <div className="absolute top-8 left-8 w-8 h-8 bg-purple-300 dark:bg-purple-700 rounded-full"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Evaluate Model Reasoning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Assess AI model performance with detailed analytics and comprehensive metrics.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 