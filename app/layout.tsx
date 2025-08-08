'use client';

import '../styles/globals.css';
import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext'
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>STEM LLM Evaluation Platform</title>
      </head>
      <body className="relative min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white" style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}