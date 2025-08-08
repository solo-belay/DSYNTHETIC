'use client'

import { useState, useRef } from 'react'
import {
  CloudArrowUpIcon,
  PlayIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  StarIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightCircleIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export const UploadEvaluate = () => {
  const [activeTab, setActiveTab] = useState<'file' | 'image'>('file')
  const [showEvaluation, setShowEvaluation] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return
    console.log('Selected files:', files)
  }

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <section className="w-full py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Upload & Evaluate</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Upload STEM documents, images, or paste text to automatically generate Q&A pairs and evaluate them across multiple LLM models.
        </p>

        {/* Toggle Buttons */}
        <div className="max-w-4xl mx-auto flex mb-8 rounded-lg overflow-hidden shadow-md">
          <button
            onClick={() => setActiveTab('file')}
            className={`w-1/2 px-6 py-2 text-sm font-medium transition-all ${
              activeTab === 'file'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            File Upload
          </button>
          <button
            onClick={() => setActiveTab('image')}
            className={`w-1/2 px-6 py-2 text-sm font-medium transition-all ${
              activeTab === 'image'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            Image
          </button>
        </div>

        {/* Upload Area */}
        <div
          onClick={handleUploadClick}
          className="relative border border-gray-300 dark:border-gray-600 rounded-xl p-6 md:p-10 bg-white dark:bg-gray-800 max-w-4xl mx-auto cursor-pointer"
        >
          <div className="absolute left-6 top-6 flex items-center gap-2">
            <CloudArrowUpIcon className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Upload {activeTab === 'file' ? 'Files' : 'Images'}
            </span>
          </div>
          <div className="border border-dashed border-gray-400 dark:border-gray-600 rounded-xl py-10 px-4 flex flex-col items-center justify-center mt-6">
            <CloudArrowUpIcon className="w-10 h-10 text-blue-500 mb-3" />
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
              Drag & drop {activeTab === 'file' ? 'files' : 'images'} here
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              or click to browse • {activeTab === 'file' ? 'PDF supported' : 'Image files supported'}
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={activeTab === 'file' ? '.pdf' : 'image/*'}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Start Button */}
        {!showEvaluation && (
          <div className="mt-8">
            <button
              onClick={() => setShowEvaluation(true)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <PlayIcon className="w-5 h-5" />
              Start LLM Evaluation
            </button>
          </div>
        )}

        {/* Evaluation Box */}
        <AnimatePresence>
          {showEvaluation && (
            <motion.div
              key="evaluation-box"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="relative border border-gray-300 dark:border-gray-600 rounded-xl p-6 md:p-10 bg-white dark:bg-gray-800 max-w-4xl mx-auto mt-8 text-left">
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Evaluation Completed</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { value: '100', label: 'Q&A Generated', color: 'text-blue-600 dark:text-blue-400' },
                    { value: '2,345', label: 'Token Usage', color: 'text-green-600 dark:text-green-400' },
                    { value: '90%', label: 'Avg Accuracy', color: 'text-yellow-600 dark:text-yellow-400' },
                    { value: '23.2s', label: 'Response Time', color: 'text-purple-600 dark:text-purple-400' }
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
                      <div className={`text-xl font-bold mb-1 ${item.color}`}>{item.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 items-center justify-between mt-6">
                  <button
                    onClick={() => router.push('/dashboard')}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors"
                  >
                    <ArrowRightCircleIcon className="w-5 h-5" />
                    View Results Dashboard
                  </button>
                  <div className="flex gap-2">
                    <button className="inline-flex items-center gap-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <ArrowDownTrayIcon className="w-4 h-4" />
                      Export CSV
                    </button>
                    <button className="inline-flex items-center gap-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <ArrowDownTrayIcon className="w-4 h-4" />
                      Export JSON
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto text-center">
          {[
            {
              icon: QuestionMarkCircleIcon,
              value: '15,847',
              label: 'Questions Evaluated',
              sub: '+2,341 this week',
            },
            {
              icon: CpuChipIcon,
              value: '3+',
              label: 'LLM Models',
              sub: 'GPT-4, Claude, Gemini & more',
            },
            {
              icon: AcademicCapIcon,
              value: '1,200+',
              label: 'Researchers',
              sub: 'From 50+ institutions',
            },
            {
              icon: StarIcon,
              value: '94.2%',
              label: 'Top Accuracy',
              sub: 'GPT-4 leading performance',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{item.label}</div>
              <div className="text-xs mt-1 text-gray-500 dark:text-gray-400">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}