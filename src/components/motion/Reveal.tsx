'use client';

import React from 'react';
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
  fast?: boolean;
}

/**
 * Robust scroll reveal component anchored in Motion's `whileInView`.
 * - Triggers cleanly as each section enters viewport during scroll.
 * - `viewport: { once: true }` ensures elements never flash or disappear on reverse scrolling.
 * - Fast mode ensures project lists appear briskly without sluggish delays.
 * - Respects `prefers-reduced-motion` explicitly.
 */
export function Reveal({
  children,
  delay = 0,
  y = 8,
  className,
  fast = false,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const duration = fast ? 0.18 : 0.28;
  const clampedDelay = Math.min(delay, fast ? 0.04 : 0.08);

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px 80px 0px' }}
      transition={{
        duration,
        delay: clampedDelay,
        ease: SAWAD_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
