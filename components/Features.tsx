'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HelpCircle, Eye, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

export function Features() {
  const features = [
    {
      icon: <HelpCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Challenging Question Generation",
      description: "Generate high-quality STEM questions that push AI models to their limits, covering advanced topics across multiple disciplines.",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-800"
    },
    {
      icon: <Eye className="w-8 h-8 text-red-600 dark:text-red-400" />,
      title: "Blind Spot Detection",
      description: "Identify areas where AI models struggle and discover their reasoning limitations through comprehensive analysis.",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      iconBg: "bg-red-100 dark:bg-red-800"
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600 dark:text-gray-400" />,
      title: "Evaluation Automation",
      description: "Automate the entire evaluation process with sophisticated scoring algorithms and detailed performance metrics.",
      bgColor: "bg-gray-50 dark:bg-gray-800",
      iconBg: "bg-gray-100 dark:bg-gray-700"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="features" className="py-20 px-[clamp(24px,4vw,64px)] bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            FEATURES
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our comprehensive platform provides everything you need to evaluate and improve AI model performance 
            across STEM domains.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 ${feature.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}