'use client'

import { useTheme } from '@/hooks/useTheme'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LandingPage() {
  const router = useRouter()
  const [theme] = useTheme()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/img1.png',
    '/img2.png',
    '/img3.png',
    '/img4.png',
    '/img5.png',
    '/img6.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const handleDashboardClick = () => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('user')
      router.push(isLoggedIn ? '/landing' : '/auth/signin')
    }
  }

  return (
    <section className="h-auto w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      <style jsx>{`
        .fade-enter {
          opacity: 0;
        }
        .fade-enter-active {
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8 max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Benchmark the Smartest.<br />
            <span className="text-blue-600 dark:text-blue-400">Trust the Most Reliable.</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Task-specific LLM evaluation using our proprietary dataset with comprehensive metrics.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/auth/signin')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all"
            >
              Get Started
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDashboardClick}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-all"
            >
              View Dashboard
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Slider */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 max-w-xl"
        >
          <div className="relative h-80 md:h-96 w-full">
            {images.map((src, index) => (
              <motion.img
                key={src}
                src={src}
                alt={`Demo ${index + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentImageIndex ? 1 : 0,
                  zIndex: index === currentImageIndex ? 1 : 0
                }}
                transition={{ duration: 1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}