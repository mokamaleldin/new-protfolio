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
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: SAWAD_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
