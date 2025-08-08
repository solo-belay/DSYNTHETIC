'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-[clamp(24px,4vw,64px)] bg-white dark:bg-gray-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            CONTACT US
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Talk to Our Sales & Marketing Team
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to revolutionize your AI evaluation process? Get in touch with our team to learn how 
            Psynthetic can help you break through AI data bottlenecks.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Company
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your AI evaluation needs and how we can help..."
                className="w-full min-h-[120px]"
              />
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}