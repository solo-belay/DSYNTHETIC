'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ClipboardCheck, Lightbulb, Package, FileCheck } from 'lucide-react'

export function Process() {
  const steps = [
    {
      number: "1",
      icon: <ClipboardCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Research and Content Planning",
      description: "Analyze your requirements and plan the content strategy for comprehensive STEM evaluation."
    },
    {
      number: "2",
      icon: <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
      title: "Question Generation and Production",
      description: "Generate high-quality STEM questions using advanced AI algorithms and expert validation."
    },
    {
      number: "3",
      icon: <Package className="w-6 h-6 text-green-600 dark:text-green-400" />,
      title: "Dataset Packaging",
      description: "Organize and package the generated questions into structured datasets ready for evaluation."
    },
    {
      number: "4",
      icon: <FileCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Deliver Final Dataset",
      description: "Deliver the complete evaluation dataset with comprehensive documentation and support."
    }
  ]

  return (
    <section id='process' className="py-20 px-[clamp(24px,4vw,64px)] bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            PROCESS
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            How We Work at Psynthetic
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our systematic approach ensures high-quality STEM evaluation datasets that meet your specific requirements 
            and deliver measurable results.
          </p>
        </div>

        {/* Process Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 h-96 relative">
            {/* Isometric illustration elements */}
            <div className="absolute top-4 left-4 w-16 h-12 bg-gray-200 dark:bg-gray-600 rounded"></div>
            <div className="absolute top-8 left-8 w-12 h-8 bg-blue-200 dark:bg-blue-800 rounded"></div>
            <div className="absolute bottom-4 right-4 w-20 h-16 bg-purple-200 dark:bg-purple-800 rounded-lg"></div>
            <div className="absolute bottom-8 right-8 w-8 h-8 bg-yellow-200 dark:bg-yellow-800 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-gray-300 dark:bg-gray-500 rounded"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-red-200 dark:bg-red-800 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-green-200 dark:bg-green-800 rounded-full"></div>
          </div>

          {/* Right - Process Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </CardTitle>
                    </div>
                    <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 