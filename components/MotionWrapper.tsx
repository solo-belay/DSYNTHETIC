'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function MotionWrapper({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6 
}: MotionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
} 