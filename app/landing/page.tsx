'use client';

import { Suspense } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { CallToAction } from '@/components/CallToAction';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Blogs } from '@/components/Blogs';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';
import { MotionWrapper } from '@/components/MotionWrapper';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <MotionWrapper>
            <Hero />
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <About />
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <Features />
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <CallToAction />
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <Services />
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <Process />
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <Blogs />
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <Pricing />
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <Contact />
          </MotionWrapper>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
}
