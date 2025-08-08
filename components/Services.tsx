'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Search, Lightbulb } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Advanced LLM Training",
      description: "Train and fine-tune large language models with our comprehensive STEM datasets to improve reasoning capabilities.",
      features: [
        "Custom model fine-tuning",
        "Multi-domain training data",
        "Performance optimization",
        "Scalable training pipelines"
      ],
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-800"
    },
    {
      icon: <Search className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
      title: "Model Evaluation",
      description: "Comprehensive evaluation tools to assess model performance across various STEM domains and difficulty levels.",
      features: [
        "Automated scoring systems",
        "Detailed performance metrics",
        "Comparative analysis",
        "Real-time evaluation"
      ],
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      iconBg: "bg-yellow-100 dark:bg-yellow-800"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-red-600 dark:text-red-400" />,
      title: "STEM Question Generation",
      description: "Generate high-quality STEM questions across multiple disciplines with varying complexity levels.",
      features: [
        "Multi-disciplinary coverage",
        "Adaptive difficulty levels",
        "Quality assurance",
        "Custom question types"
      ],
      bgColor: "bg-red-50 dark:bg-red-900/20",
      iconBg: "bg-red-100 dark:bg-red-800"
    }
  ]

  return (
    <section id="services" className="py-20 px-[clamp(24px,4vw,64px)] bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            SERVICES
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Tools for Understanding Model Reasoning
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our comprehensive suite of tools helps you understand, evaluate, and improve AI model reasoning 
            across STEM domains.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}