'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useCanRender3D } from './useCanRender3D';
import { OrbitFallback } from './OrbitFallback';

const ProfileOrbitCanvas = dynamic(() => import('./ProfileOrbitCanvas'), {
  ssr: false,
  loading: () => <OrbitFallback />,
});

export function ProfileOrbit() {
  const canRender3D = useCanRender3D();

  return (
    <>
      {/* Always render crisp SVG orbit lines matching Sawad, and layer subtle WebGL motion when supported */}
      <OrbitFallback />
      {canRender3D ? (
        <div className="opacity-65">
          <ProfileOrbitCanvas />
        </div>
      ) : null}
    </>
  );
}
