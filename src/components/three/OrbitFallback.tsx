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
      className="pointer-events-none absolute inset-0 h-full w-full select-none overflow-hidden rounded-[20px]"
    >
      {/* Top-left dashed orbit arc */}
      <path
        d="M -18 42 C 28 96, 128 84, 152 -14"
        stroke="#F46C38"
        strokeWidth="3.5"
        strokeDasharray="6 7"
        strokeLinecap="round"
      />
      {/* Mid-left dashed orbit arc curving above the orange circular badge */}
      <path
        d="M -16 420 C 38 416, 78 394, 102 362"
        stroke="#F46C38"
        strokeWidth="3.5"
        strokeDasharray="6 7"
        strokeLinecap="round"
      />
    </svg>
  );
}
