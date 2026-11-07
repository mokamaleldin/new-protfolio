'use client';

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

function OrbitCurves() {
  const groupRef = useRef<THREE.Group>(null);
  const dotRef = useRef<THREE.Mesh>(null);

  const { upperPoints, lowerPoints, lowerCurve } = useMemo(() => {
    const c1 = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-1.62, 2.28, 0.05),
      new THREE.Vector3(-1.12, 1.72, 0.12),
      new THREE.Vector3(-0.22, 1.85, 0.08),
      new THREE.Vector3(0.05, 2.75, 0.02)
    );

    const c2 = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-1.62, -1.35, 0.04),
      new THREE.Vector3(-1.02, -1.28, 0.1),
      new THREE.Vector3(-0.54, -0.98, 0.08),
      new THREE.Vector3(-0.32, -0.58, 0.02)
    );

    return {
      upperPoints: c1.getPoints(48),
      lowerPoints: c2.getPoints(40),
      lowerCurve: c2,
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      const targetX = state.pointer.y * 0.05;
      const targetY = state.pointer.x * 0.06;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.06
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        0.06
      );
    }
    if (dotRef.current) {
      const u = (Math.sin(t * 0.65) + 1) * 0.5;
      const pos = lowerCurve.getPoint(u);
      dotRef.current.position.copy(pos);
    }
  });

  return (
    <group ref={groupRef}>
      <Line
        points={upperPoints}
        color="#F46C38"
        lineWidth={2.6}
        dashed
        dashSize={0.09}
        gapSize={0.08}
      />
      <Line
        points={lowerPoints}
        color="#F46C38"
        lineWidth={2.6}
        dashed
        dashSize={0.09}
        gapSize={0.08}
      />
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color="#F46C38" />
      </mesh>
    </group>
  );
}

export default function ProfileOrbitCanvas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden rounded-[20px]"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.2], fov: 60 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      >
        <OrbitCurves />
      </Canvas>
    </div>
  );
}
