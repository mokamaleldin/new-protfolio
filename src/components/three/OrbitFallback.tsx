import React from 'react';

/**
 * Exact SVG recreation of Sawad's two dashed orange orbital curves on the white profile card:
 * 1) Upper-left dashed arc crossing the top-left corner of the card.
 * 2) Mid-left dashed arc curving gently near the profile card margin.
 * Positioned in the background layer (z-0) with no elements under the social buttons.
 */
export function OrbitFallback() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 540"
      fill="none"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none overflow-hidden rounded-[20px]"
    >
      {/* Top-left dashed orbit arc with fluid motion */}
      <path
        d="M -4 18 C 24 108, 138 104, 174 -8"
        stroke="#F46C38"
        strokeWidth="3.2"
        strokeDasharray="6.5 6.5"
        strokeLinecap="round"
        className="animate-orbit-top"
      />
      {/* Mid-left dashed orbit arc curving gently near profile card margin */}
      <path
        d="M -16 420 C 38 416, 78 394, 102 362"
        stroke="#F46C38"
        strokeWidth="3.2"
        strokeDasharray="6.5 6.5"
        strokeLinecap="round"
        className="animate-orbit-bottom"
      />
    </svg>
  );
}
