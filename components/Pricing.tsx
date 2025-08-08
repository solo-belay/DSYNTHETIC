'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, CreditCard, Calendar, X } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For students, researchers, and individuals needing a quick start.",
      price: "Free Trial",
      features: [
        "Generate 1000 questions",
        "5 STEM topics",
        "Basic analytics",
        "Email support",
        "Standard evaluation metrics"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default",
      highlighted: false
    },
    {
      name: "Advanced",
      description: "Designed for AI developers and researchers with 1M+ questions needs.",
      price: "$20 /month",
      features: [
        "1,000,000 questions",
        "All STEM topics",
        "Advanced analytics",
        "Priority support",
        "Custom evaluation metrics",
        "API access",
        "Team collaboration"
      ],
      buttonText: "Choose Plan",
      buttonVariant: "outline",
      highlighted: true
    },
    {
      name: "Lab / Enterprise",
      description: "For companies, labs, and teams needing custom solutions.",
      price: "Custom",
      features: [
        "Unlimited question generation",
        "Custom STEM domains",
        "Enterprise analytics",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "default",
      highlighted: false
    }
  ]

  const featureIcons = [
    { icon: <CreditCard className="w-5 h-5" />, text: "No credit card required" },
    { icon: <Calendar className="w-5 h-5" />, text: "Get 30 days trial" },
    { icon: <X className="w-5 h-5" />, text: "Cancel anytime" }
  ]

  return (
    <section id="pricing" className="py-20 px-[clamp(24px,4vw,64px)] bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            PRICING
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Check Our Valuable Price
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your AI evaluation needs. Start with our free trial and scale as you grow.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            {featureIcons.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  {feature.icon}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.highlighted 
                  ? 'bg-blue-600 dark:bg-blue-700 text-white ring-4 ring-blue-200 dark:ring-blue-800' 
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-2xl font-bold ${
                  plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {plan.name}
                </CardTitle>
                <p className={`text-sm ${
                  plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className={`text-3xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.price}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${
                        plan.highlighted ? 'text-blue-200' : 'text-green-600 dark:text-green-400'
                      }`} />
                      <span className={`text-sm ${
                        plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${
                    plan.highlighted 
                      ? 'bg-white text-blue-600 hover:bg-gray-100' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                  variant={plan.buttonVariant as "default" | "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 