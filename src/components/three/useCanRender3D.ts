'use client';

import { useEffect, useState } from 'react';

export function useCanRender3D(): boolean {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    try {
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (reducedMotion) {
        setCanRender(false);
        return;
      }

      const cores = navigator.hardwareConcurrency || 4;
      if (cores < 2) {
        setCanRender(false);
        return;
      }

      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

      setCanRender(Boolean(gl));
    } catch {
      setCanRender(false);
    }
  }, []);

  return canRender;
}
