'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Brain, Facebook, Twitter, Linkedin, Youtube, Star } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-950 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Logo and Subscribe */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Brain className="h-6 w-6 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-blue-400">
                PSYNTHETIC
              </span>
            </div>
            
            <p className="text-blue-400 dark:text-blue-200 text-sm leading-relaxed">
              Breaking AI data bottlenecks with comprehensive STEM evaluation datasets. 
              Challenge frontier models and improve reasoning capabilities.
            </p>

            {/* Subscribe */}
            <div className="space-y-3 ">
              <h4 className="text-sm font-semibold text-blue-400 text-white">Subscribe to our newsletter</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 focus:border-blue-400"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-600 dark:text-white">Explore</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link href="/" className="block text-blue-400 dark:text-blue-200 hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link href="#about" className="block text-blue-400 dark:text-blue-200 hover:text-white transition-colors text-sm">
                  About
                </Link>
                <Link href="#services" className="block text-blue-400 dark:text-blue-200 hover:text-white transition-colors text-sm">
                  Services
                </Link>
                <Link href="#process" className="block text-blue-400 dark:text-blue-200 hover:text-white transition-colors text-sm">
                  Our Process
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="#pricing" className="block text-blue-400 dark:text-blue-200 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
                <Link href="#blogs" className="block text-blue-400 dark:text-blue-200 hover:text-white transition-colors text-sm">
                  Blogs
                </Link>
                <Link href="/auth/signin" className="block text-blue-400 dark:text-blue-200 hover:text-white transition-colors text-sm">
                  Login
                </Link>
                <Link href="/auth/signup" className="block text-blue-400 dark:text-blue-200 hover:text-white transition-colors text-sm">
                  Getting Started
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Rating */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-600 dark:text-white">Rating</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-blue-400 dark:text-white">5.0/5.0</span>
                <span className="text-blue-400 dark:text-blue-200 text-sm">Overall Rating</span>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-4 pt-2 pb-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-blue-400 dark:text-blue-200 text-sm">Follow Us</span>
              <div className="flex space-x-3">
                <Link href="#" className="text-blue-400 dark:text-blue-200 hover:text-blue-800 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-blue-400 dark:text-blue-200 hover:text-blue-800 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-blue-400 dark:text-blue-200 hover:text-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-blue-400 dark:text-blue-200 hover:text-blue-800 transition-colors">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-blue-400 dark:text-blue-200 text-sm">
              © 2023 Psynthetic. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}