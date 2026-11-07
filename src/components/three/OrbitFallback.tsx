import React from 'react';

/**
 * Exact SVG recreation of Sawad's two dashed orange orbital curves on the white profile card:
 * 1) Upper-left dashed arc crossing the top-left corner of the card and portrait.
 * 2) Lower-left dashed arc curving around the orange icon badge above the bio text.
 */
export function OrbitFallback() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 540"
      fill="none"
      className="pointer-events-none absolute inset-0 z-20 h-full w-full select-none overflow-hidden rounded-[20px]"
    >
      {/* Top-left dashed orbit arc crossing over the portrait corner */}
      <path
        d="M -4 18 C 24 108, 138 104, 174 -8"
        stroke="#F46C38"
        strokeWidth="3.5"
        strokeDasharray="6.5 6.5"
        strokeLinecap="round"
      />
      {/* Mid-left dashed orbit arc curving above the orange circular badge */}
      <path
        d="M -16 420 C 38 416, 78 394, 102 362"
        stroke="#F46C38"
        strokeWidth="3.5"
        strokeDasharray="6.5 6.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
