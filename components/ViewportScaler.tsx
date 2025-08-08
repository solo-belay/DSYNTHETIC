'use client'

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const TARGET_WIDTH = 1920;

export function ViewportScaler({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    const updateLayout = () => {
      if (!containerRef.current) return;

      const scale = window.innerWidth / TARGET_WIDTH;
      // Apply scaling to both X and Y
      containerRef.current.style.transform = `scale(${scale})`;
      containerRef.current.style.width = `${TARGET_WIDTH}px`;
      containerRef.current.style.transformOrigin = 'top left';
      // Set the scaled height so the scroll area matches the visible content
      const scaledHeight = containerRef.current.scrollHeight * scale;
      containerRef.current.style.height = `${scaledHeight}px`;
      
      // Reset document heights to allow natural scrolling
      document.documentElement.style.height = 'auto';
      document.body.style.height = 'auto';
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [pathname]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        overflowX: 'hidden' // Only prevent horizontal scroll
      }}
    >
      {children}
    </div>
  );
}