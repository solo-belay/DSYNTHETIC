'use client'

import { Card, CardContent } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="py-20 px-[clamp(24px,4vw,64px)] bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ABOUT US
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're revolutionizing AI evaluation by providing comprehensive STEM datasets that challenge 
            and improve model reasoning capabilities.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Closing the AI Reasoning Gap */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Closing the AI Reasoning Gap
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our platform addresses the critical gap in AI reasoning capabilities by providing 
              high-quality STEM evaluation datasets that push models beyond their current limitations.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Faster models accessibility</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">100x faster manual annotation costs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Comprehensive evaluation metrics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Multi-domain STEM coverage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Real-time performance tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Advanced analytics dashboard</span>
              </div>
            </div>
          </div>

          {/* Right Column - From Problem Generation to Model Evaluation */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              From Problem Generation to Model Evaluation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our comprehensive pipeline covers every aspect of AI evaluation, from generating 
              challenging STEM problems to providing detailed model performance analysis.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Generate high-quality STEM problems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Evaluate model performance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Custom dataset creation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Automated scoring systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Detailed performance reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Comparative model analysis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Illustrations */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Left Illustration */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 h-64 relative">
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-yellow-200 dark:bg-yellow-800 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded"></div>
            </div>
            <div className="absolute top-4 left-4 w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
            <div className="absolute top-8 left-8 w-8 h-8 bg-blue-200 dark:bg-blue-800 rounded"></div>
            <div className="absolute bottom-8 left-8 w-10 h-6 bg-gray-300 dark:bg-gray-500 rounded"></div>
          </div>

          {/* Right Illustration */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 h-64 relative">
            <div className="absolute bottom-4 left-4 w-12 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-600 dark:bg-purple-400 rounded"></div>
            </div>
            <div className="absolute top-8 right-8 w-8 h-8 bg-pink-200 dark:bg-pink-800 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-10 h-6 bg-gray-300 dark:bg-gray-500 rounded"></div>
              </div>
        </div>
        </div>
    </section>
  )
}