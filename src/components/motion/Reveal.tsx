'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const SAWAD_SPRING = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30,
  mass: 1,
};

export const SAWAD_EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/**
 * Progressive reveal wrapper that never leaves elements invisible on SSR,
 * headless browsers, or before IntersectionObserver fires.
 * Content is always visible (`opacity: 1`) on initial paint, and gently
 * animates in when entering the viewport below the fold.
 */
export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.top > window.innerHeight * 0.92) {
      setEntered(false);
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setEntered(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={entered ? { opacity: 1, y: 0 } : { opacity: 0.15, y }}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.18), ease: SAWAD_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
