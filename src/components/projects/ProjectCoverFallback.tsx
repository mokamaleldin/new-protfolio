import React from 'react';
import type { ProjectCoverTheme } from '@/data/projects';
import { cn } from '@/lib/cn';

interface ProjectCoverFallbackProps {
  theme: ProjectCoverTheme;
  alt: string;
  size?: 'thumb' | 'hero';
  className?: string;
}

/**
 * Unified visual cover system anchored in the portfolio's brand palette:
 * - Warm dark surfaces (#151312, #1D1917, #231E1C)
 * - Signature Sawad orange (#F46C38 / #CA592E)
 * - Highlight lime accent (#C5FF41)
 * - Clean neutral whites and muted grays (#FFFFFF / #998F8F)
 */
const THEME_CONTAINERS: Record<ProjectCoverTheme, string> = {
  id8: 'border-[#F46C38]/25 bg-gradient-to-br from-[#241A16] via-[#1A1615] to-[#141211]',
  kashida:
    'border-[#C5FF41]/25 bg-gradient-to-br from-[#1E2216] via-[#181715] to-[#141211]',
  duthur:
    'border-[#F46C38]/25 bg-gradient-to-br from-[#231B16] via-[#1B1614] to-[#141211]',
  '7analaan':
    'border-white/[0.12] bg-gradient-to-br from-[#221B18] via-[#191615] to-[#141211]',
  sahwa:
    'border-[#C5FF41]/20 bg-gradient-to-br from-[#1C1F17] via-[#181615] to-[#141211]',
};

function CoverArtwork({ theme }: { theme: ProjectCoverTheme }) {
  switch (theme) {
    case 'id8':
      // Broadcast, rundown scheduling, and content flow — Interactive motion scene
      return (
        <g>
          <style>{`
            @keyframes id8-pulse-ring {
              0% { r: 12px; opacity: 0.8; stroke-width: 2px; }
              70% { r: 24px; opacity: 0; stroke-width: 1px; }
              100% { r: 24px; opacity: 0; }
            }
            @keyframes id8-ecg-flow {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -40px; }
            }
            @keyframes id8-stream-dot {
              0% { transform: translateX(0); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateX(26px); opacity: 0; }
            }
            @keyframes id8-row-sweep-1 {
              0%, 100% { stroke-opacity: 0.12; fill-opacity: 0.88; }
              20%, 35% { stroke-opacity: 0.7; fill-opacity: 1; }
            }
            @keyframes id8-row-sweep-2 {
              0%, 100% { stroke-opacity: 0.45; fill-opacity: 0.35; }
              45%, 60% { stroke-opacity: 0.9; fill-opacity: 0.9; }
            }
            @keyframes id8-row-sweep-3 {
              0%, 100% { stroke-opacity: 0.1; fill-opacity: 0.18; }
              70%, 85% { stroke-opacity: 0.7; fill-opacity: 0.8; }
            }
            @keyframes id8-beacon {
              0%, 100% { opacity: 0.3; transform: scale(0.9); }
              50% { opacity: 1; transform: scale(1.15); }
            }
            .id8-ring-anim { animation: id8-pulse-ring 2.4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite; }
            .id8-ecg-anim { stroke-dasharray: 8 4; animation: id8-ecg-flow 2s linear infinite; }
            .id8-dot-anim { animation: id8-stream-dot 1.8s ease-in-out infinite; }
            .id8-r1-anim { animation: id8-row-sweep-1 3.6s ease-in-out infinite; }
            .id8-r2-anim { animation: id8-row-sweep-2 3.6s ease-in-out infinite; }
            .id8-r3-anim { animation: id8-row-sweep-3 3.6s ease-in-out infinite; }
            .id8-beacon-anim { transform-origin: 344px 190px; animation: id8-beacon 1.4s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .id8-ring-anim, .id8-ecg-anim, .id8-dot-anim, .id8-r1-anim, .id8-r2-anim, .id8-r3-anim, .id8-beacon-anim {
                animation: none !important;
              }
            }
          `}</style>

          <line x1="40" y1="45" x2="360" y2="45" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
          <line x1="40" y1="125" x2="360" y2="125" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />
          <line x1="40" y1="205" x2="360" y2="205" stroke="#FFFFFF" strokeOpacity="0.05" strokeWidth="1" />

          {/* Left: Live broadcast signal node with pulsing rings */}
          <rect x="38" y="48" width="84" height="114" rx="10" fill="#1F1917" stroke="#F46C38" strokeOpacity="0.45" strokeWidth="1.5" />
          <circle cx="80" cy="88" r="20" fill="#F46C38" fillOpacity="0.14" stroke="#F46C38" strokeOpacity="0.6" strokeWidth="1.5" />
          <circle cx="80" cy="88" r="14" fill="none" stroke="#F46C38" className="id8-ring-anim" />
          <circle cx="80" cy="88" r="10" fill="#F46C38" fillOpacity="0.3" />
          <circle cx="80" cy="88" r="4.5" fill="#F46C38" />
          <path
            d="M54 134 L66 134 L72 122 L80 144 L87 128 L93 134 L106 134"
            stroke="#F46C38"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="id8-ecg-anim"
          />

          {/* Flow connector with traveling data stream dot */}
          <path d="M122 105 L148 105" stroke="#F46C38" strokeOpacity="0.6" strokeWidth="1.75" strokeDasharray="3 3" />
          <circle cx="122" cy="105" r="3.2" fill="#C5FF41" className="id8-dot-anim" />
          <circle cx="148" cy="105" r="3" fill="#F46C38" />

          {/* Right: Program rundown & segment scheduling blocks with sequential highlight */}
          <rect x="150" y="48" width="212" height="32" rx="7" fill="#231D1B" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="1.2" className="id8-r1-anim" />
          <rect x="160" y="58" width="28" height="12" rx="3" fill="#F46C38" fillOpacity="0.88" />
          <rect x="198" y="60" width="96" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.72" />
          <rect x="312" y="60" width="38" height="8" rx="4" fill="#998F8F" fillOpacity="0.35" />

          <rect x="150" y="89" width="212" height="32" rx="7" fill="#231D1B" stroke="#F46C38" strokeOpacity="0.45" strokeWidth="1.2" className="id8-r2-anim" />
          <rect x="160" y="99" width="28" height="12" rx="3" fill="#F46C38" fillOpacity="0.35" />
          <rect x="198" y="101" width="114" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.85" />
          <circle cx="344" cy="105" r="4" fill="#F46C38" />

          <rect x="150" y="130" width="212" height="32" rx="7" fill="#231D1B" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.2" className="id8-r3-anim" />
          <rect x="160" y="140" width="28" height="12" rx="3" fill="#FFFFFF" fillOpacity="0.18" />
          <rect x="198" y="142" width="78" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.5" />
          <rect x="304" y="142" width="46" height="8" rx="4" fill="#998F8F" fillOpacity="0.28" />

          {/* Bottom: Live newsroom ticker bar with blinking beacon */}
          <rect x="38" y="176" width="324" height="28" rx="7" fill="#1E1816" stroke="#F46C38" strokeOpacity="0.35" strokeWidth="1.2" />
          <rect x="46" y="183" width="44" height="14" rx="4" fill="#F46C38" />
          <line x1="104" y1="190" x2="210" y2="190" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="4" strokeLinecap="round" />
          <line x1="226" y1="190" x2="306" y2="190" stroke="#998F8F" strokeOpacity="0.45" strokeWidth="4" strokeLinecap="round" />
          <circle cx="344" cy="190" r="3.5" fill="#C5FF41" className="id8-beacon-anim" />
        </g>
      );

    case 'kashida':
      // Media workflow, Arabic typography baseline curve, and automation — Motion scene
      return (
        <g>
          <style>{`
            @keyframes kashida-stream-flow {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -32px; }
            }
            @keyframes kashida-curve-pulse {
              0%, 100% { stroke-width: 2.8px; filter: drop-shadow(0 0 2px rgba(197,255,65,0.4)); }
              50% { stroke-width: 3.8px; filter: drop-shadow(0 0 6px rgba(197,255,65,0.8)); }
            }
            @keyframes kashida-node-glow {
              0%, 100% { transform: scale(1); opacity: 0.6; }
              50% { transform: scale(1.3); opacity: 1; }
            }
            .kashida-stream-anim { stroke-dasharray: 6 4; animation: kashida-stream-flow 2.2s linear infinite; }
            .kashida-curve-anim { animation: kashida-curve-pulse 3s ease-in-out infinite; }
            .kashida-n1 { transform-origin: 192px 100px; animation: kashida-node-glow 2.4s ease-in-out infinite; }
            .kashida-n2 { transform-origin: 216px 132px; animation: kashida-node-glow 2.4s ease-in-out 1.2s infinite; }
            @media (prefers-reduced-motion: reduce) {
              .kashida-stream-anim, .kashida-curve-anim, .kashida-n1, .kashida-n2 { animation: none !important; }
            }
          `}</style>

          {/* Connecting workflow curves with streaming dashes */}
          <path d="M116 84 C 138 84, 142 112, 162 112" stroke="#C5FF41" strokeOpacity="0.7" strokeWidth="1.8" fill="none" className="kashida-stream-anim" />
          <path d="M116 166 C 138 166, 142 138, 162 138" stroke="#F46C38" strokeOpacity="0.7" strokeWidth="1.8" fill="none" className="kashida-stream-anim" />
          <path d="M246 112 C 268 112, 272 82, 292 82" stroke="#C5FF41" strokeOpacity="0.7" strokeWidth="1.8" fill="none" className="kashida-stream-anim" />
          <path d="M246 138 C 268 138, 272 168, 292 168" stroke="#C5FF41" strokeOpacity="0.7" strokeWidth="1.8" fill="none" className="kashida-stream-anim" />

          {/* Left: Editorial input & visual source cards */}
          <rect x="36" y="54" width="80" height="60" rx="9" fill="#1D1A18" stroke="#FFFFFF" strokeOpacity="0.16" strokeWidth="1.3" />
          <line x1="50" y1="72" x2="98" y2="72" stroke="#FFFFFF" strokeOpacity="0.72" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="50" y1="85" x2="86" y2="85" stroke="#998F8F" strokeOpacity="0.55" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="50" y1="98" x2="74" y2="98" stroke="#C5FF41" strokeOpacity="0.8" strokeWidth="3.5" strokeLinecap="round" />

          <rect x="36" y="136" width="80" height="60" rx="9" fill="#1D1A18" stroke="#FFFFFF" strokeOpacity="0.16" strokeWidth="1.3" />
          <rect x="50" y="150" width="24" height="20" rx="4" fill="#F46C38" fillOpacity="0.22" stroke="#F46C38" strokeOpacity="0.65" strokeWidth="1.2" />
          <line x1="82" y1="156" x2="102" y2="156" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="3" strokeLinecap="round" />
          <line x1="82" y1="166" x2="96" y2="166" stroke="#998F8F" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="181" x2="98" y2="181" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round" />

          {/* Center: AI automation & Arabic kashida baseline engine */}
          <rect x="162" y="72" width="84" height="106" rx="12" fill="#21231B" stroke="#C5FF41" strokeOpacity="0.65" strokeWidth="1.6" />
          <path d="M180 120 Q 192 104, 200 120 L 222 120 Q 228 120, 228 110" stroke="#C5FF41" strokeWidth="3" strokeLinecap="round" fill="none" className="kashida-curve-anim" />
          <circle cx="192" cy="100" r="2.8" fill="#F46C38" className="kashida-n1" />
          <circle cx="216" cy="132" r="2.8" fill="#C5FF41" className="kashida-n2" />
          <line x1="176" y1="148" x2="232" y2="148" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="176" y1="160" x2="218" y2="160" stroke="#C5FF41" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />

          {/* Right: Multi-format automated publishing outputs */}
          <rect x="292" y="48" width="72" height="68" rx="9" fill="#1D1A18" stroke="#C5FF41" strokeOpacity="0.45" strokeWidth="1.3" />
          <rect x="304" y="60" width="48" height="28" rx="4" fill="#C5FF41" fillOpacity="0.18" />
          <line x1="304" y1="98" x2="342" y2="98" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="3" strokeLinecap="round" />

          <rect x="292" y="134" width="72" height="68" rx="9" fill="#1D1A18" stroke="#C5FF41" strokeOpacity="0.45" strokeWidth="1.3" />
          <line x1="304" y1="152" x2="350" y2="152" stroke="#C5FF41" strokeOpacity="0.85" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="304" y1="166" x2="344" y2="166" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
          <rect x="304" y="178" width="32" height="12" rx="4" fill="#F46C38" fillOpacity="0.3" />
        </g>
      );

    case 'duthur':
      // Commerce, products, size-level inventory, and verified orders — Motion scene
      return (
        <g>
          <style>{`
            @keyframes duthur-stream-dot {
              0% { transform: translateX(0); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateX(28px); opacity: 0; }
            }
            @keyframes duthur-check-glow {
              0%, 100% { transform: scale(1); filter: drop-shadow(0 0 1px rgba(197,255,65,0.4)); }
              50% { transform: scale(1.08); filter: drop-shadow(0 0 6px rgba(197,255,65,0.85)); }
            }
            @keyframes duthur-bar-breathe {
              0%, 100% { transform: scaleX(1); }
              50% { transform: scaleX(1.06); }
            }
            .duthur-dot-anim { animation: duthur-stream-dot 1.8s ease-in-out infinite; }
            .duthur-check-anim { transform-origin: 222px 168px; animation: duthur-check-glow 2.4s ease-in-out infinite; }
            .duthur-b1 { transform-origin: 274px 61px; animation: duthur-bar-breathe 3.2s ease-in-out infinite; }
            .duthur-b2 { transform-origin: 274px 80px; animation: duthur-bar-breathe 3.2s ease-in-out 0.8s infinite; }
            .duthur-b3 { transform-origin: 274px 99px; animation: duthur-bar-breathe 3.2s ease-in-out 1.6s infinite; }
            @media (prefers-reduced-motion: reduce) {
              .duthur-dot-anim, .duthur-check-anim, .duthur-b1, .duthur-b2, .duthur-b3 { animation: none !important; }
            }
          `}</style>

          {/* Left: Product / Apparel card */}
          <rect x="38" y="46" width="128" height="158" rx="11" fill="#1F1917" stroke="#F46C38" strokeOpacity="0.42" strokeWidth="1.5" />
          <rect x="52" y="60" width="100" height="86" rx="7" fill="#161312" stroke="#FFFFFF" strokeOpacity="0.08" strokeWidth="1" />
          <path
            d="M88 74 L96 78 L104 78 L112 74 L126 86 L118 98 L112 93 L112 132 L88 132 L88 93 L82 98 L74 86 Z"
            fill="#F46C38"
            fillOpacity="0.2"
            stroke="#F46C38"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <line x1="54" y1="162" x2="116" y2="162" stroke="#FFFFFF" strokeOpacity="0.82" strokeWidth="4" strokeLinecap="round" />
          <rect x="52" y="174" width="24" height="16" rx="4" fill="#F46C38" fillOpacity="0.22" stroke="#F46C38" strokeOpacity="0.65" strokeWidth="1" />
          <rect x="82" y="174" width="24" height="16" rx="4" fill="#FFFFFF" fillOpacity="0.08" />
          <rect x="112" y="174" width="24" height="16" rx="4" fill="#FFFFFF" fillOpacity="0.08" />

          {/* Connector with animated dot */}
          <path d="M166 125 L194 125" stroke="#F46C38" strokeOpacity="0.6" strokeWidth="1.75" strokeDasharray="3 3" />
          <circle cx="166" cy="125" r="3.2" fill="#C5FF41" className="duthur-dot-anim" />

          {/* Right Top: Size-level stock & inventory matrix */}
          <rect x="194" y="46" width="168" height="72" rx="10" fill="#1F1917" stroke="#FFFFFF" strokeOpacity="0.14" strokeWidth="1.3" />
          <line x1="210" y1="65" x2="258" y2="65" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="274" y="61" width="72" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.12" />
          <rect x="274" y="61" width="54" height="8" rx="4" fill="#F46C38" className="duthur-b1" />

          <line x1="210" y1="84" x2="248" y2="84" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="274" y="80" width="72" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.12" />
          <rect x="274" y="80" width="64" height="8" rx="4" fill="#CA592E" className="duthur-b2" />

          <line x1="210" y1="103" x2="262" y2="103" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="274" y="99" width="72" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.12" />
          <rect x="274" y="99" width="38" height="8" rx="4" fill="#F46C38" fillOpacity="0.75" className="duthur-b3" />

          {/* Right Bottom: Verified order & fulfillment card with glowing checkmark */}
          <rect x="194" y="132" width="168" height="72" rx="10" fill="#1F1917" stroke="#C5FF41" strokeOpacity="0.38" strokeWidth="1.3" />
          <g className="duthur-check-anim">
            <circle cx="222" cy="168" r="14" fill="#C5FF41" fillOpacity="0.2" stroke="#C5FF41" strokeWidth="1.5" />
            <path d="M216 168 L220 172 L229 163" stroke="#C5FF41" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
          <line x1="248" y1="160" x2="338" y2="160" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" />
          <line x1="248" y1="176" x2="312" y2="176" stroke="#998F8F" strokeOpacity="0.7" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      );

    case '7analaan':
      // Episodes, short clips, and digital media platform — Motion scene
      return (
        <g>
          <style>{`
            @keyframes hanalaan-playhead-drift {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(38px); }
            }
            @keyframes hanalaan-eq-bounce-1 {
              0%, 100% { transform: scaleY(0.7); }
              50% { transform: scaleY(1.3); }
            }
            @keyframes hanalaan-eq-bounce-2 {
              0%, 100% { transform: scaleY(1.2); }
              50% { transform: scaleY(0.6); }
            }
            .hanalaan-scrub { animation: hanalaan-playhead-drift 5s ease-in-out infinite; }
            .hanalaan-eq1 { transform-origin: 270px 182px; animation: hanalaan-eq-bounce-1 1.6s ease-in-out infinite; }
            .hanalaan-eq2 { transform-origin: 336px 182px; animation: hanalaan-eq-bounce-2 1.9s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .hanalaan-scrub, .hanalaan-eq1, .hanalaan-eq2 { animation: none !important; }
            }
          `}</style>

          {/* Left: Widescreen 16:9 episode player frame */}
          <rect x="36" y="48" width="192" height="122" rx="11" fill="#1D1918" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1.4" />
          <circle cx="132" cy="102" r="22" fill="#F46C38" fillOpacity="0.2" stroke="#F46C38" strokeWidth="1.6" />
          <polygon points="127,93 127,111 142,102" fill="#F46C38" />
          <line x1="54" y1="150" x2="210" y2="150" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="54" y1="150" x2="136" y2="150" stroke="#F46C38" strokeWidth="3.5" strokeLinecap="round" />
          <g className="hanalaan-scrub">
            <circle cx="136" cy="150" r="4.5" fill="#F46C38" />
          </g>

          {/* Bottom Left: Episode playlist row */}
          <rect x="36" y="182" width="192" height="24" rx="6" fill="#1D1918" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.2" />
          <rect x="46" y="189" width="22" height="10" rx="3" fill="#C5FF41" fillOpacity="0.75" />
          <line x1="78" y1="194" x2="176" y2="194" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="3.5" strokeLinecap="round" />

          {/* Right: Two vertical 9:16 Shorts cards */}
          <rect x="244" y="48" width="54" height="158" rx="9" fill="#1D1918" stroke="#F46C38" strokeOpacity="0.45" strokeWidth="1.4" />
          <circle cx="271" cy="112" r="11" fill="#F46C38" fillOpacity="0.2" stroke="#F46C38" strokeWidth="1.3" />
          <polygon points="268,107 268,117 276,112" fill="#F46C38" />
          <line x1="254" y1="176" x2="286" y2="176" stroke="#FFFFFF" strokeOpacity="0.78" strokeWidth="3.5" strokeLinecap="round" className="hanalaan-eq1" />
          <line x1="254" y1="188" x2="276" y2="188" stroke="#F46C38" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />

          <rect x="310" y="48" width="54" height="158" rx="9" fill="#1D1918" stroke="#FFFFFF" strokeOpacity="0.14" strokeWidth="1.3" />
          <circle cx="337" cy="112" r="11" fill="#FFFFFF" fillOpacity="0.1" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1.3" />
          <polygon points="334,107 334,117 342,112" fill="#FFFFFF" fillOpacity="0.75" />
          <line x1="320" y1="176" x2="352" y2="176" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="3.5" strokeLinecap="round" className="hanalaan-eq2" />
          <line x1="320" y1="188" x2="342" y2="188" stroke="#998F8F" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
        </g>
      );

    case 'sahwa':
      // Library catalog & authenticated team poster studio — Motion scene
      return (
        <g>
          <style>{`
            @keyframes sahwa-canvas-flow {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -28px; }
            }
            @keyframes sahwa-lens-pulse {
              0%, 100% { transform: scale(1); opacity: 0.6; }
              50% { transform: scale(1.15); opacity: 1; }
            }
            @keyframes sahwa-stream-dot {
              0% { transform: translateX(0); opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { transform: translateX(26px); opacity: 0; }
            }
            .sahwa-canvas-anim { stroke-dasharray: 4 3; animation: sahwa-canvas-flow 2.5s linear infinite; }
            .sahwa-lens-anim { transform-origin: 62px 70px; animation: sahwa-lens-pulse 2.2s ease-in-out infinite; }
            .sahwa-dot-anim { animation: sahwa-stream-dot 1.8s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .sahwa-canvas-anim, .sahwa-lens-anim, .sahwa-dot-anim { animation: none !important; }
            }
          `}</style>

          {/* Left: Public library & book catalog grid */}
          <rect x="36" y="46" width="150" height="158" rx="11" fill="#1B1A18" stroke="#FFFFFF" strokeOpacity="0.14" strokeWidth="1.4" />
          <rect x="50" y="60" width="122" height="20" rx="5" fill="#151312" stroke="#FFFFFF" strokeOpacity="0.14" strokeWidth="1" />
          <circle cx="62" cy="70" r="4" stroke="#C5FF41" strokeWidth="1.5" fill="none" className="sahwa-lens-anim" />
          <line x1="74" y1="70" x2="132" y2="70" stroke="#998F8F" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />

          {/* Book catalog cards */}
          <rect x="50" y="92" width="36" height="46" rx="4" fill="#C5FF41" fillOpacity="0.18" stroke="#C5FF41" strokeOpacity="0.55" strokeWidth="1.2" />
          <rect x="93" y="92" width="36" height="46" rx="4" fill="#FFFFFF" fillOpacity="0.07" stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1.2" />
          <rect x="136" y="92" width="36" height="46" rx="4" fill="#F46C38" fillOpacity="0.18" stroke="#F46C38" strokeOpacity="0.5" strokeWidth="1.2" />

          <line x1="50" y1="156" x2="156" y2="156" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="50" y1="170" x2="128" y2="170" stroke="#998F8F" strokeOpacity="0.5" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="50" y1="184" x2="142" y2="184" stroke="#C5FF41" strokeOpacity="0.7" strokeWidth="3.5" strokeLinecap="round" />

          {/* Connector bridge with moving dot */}
          <path d="M186 125 L212 125" stroke="#C5FF41" strokeOpacity="0.55" strokeWidth="1.75" strokeDasharray="3 3" />
          <circle cx="186" cy="125" r="3" fill="#F46C38" className="sahwa-dot-anim" />

          {/* Right: Authenticated team poster studio canvas with flowing dashed crop lines */}
          <rect x="212" y="46" width="152" height="158" rx="11" fill="#1B1A18" stroke="#C5FF41" strokeOpacity="0.45" strokeWidth="1.5" />
          <rect x="232" y="64" width="112" height="122" rx="7" fill="#151312" stroke="#F46C38" strokeOpacity="0.65" strokeWidth="1.3" className="sahwa-canvas-anim" />
          <circle cx="288" cy="104" r="18" fill="#F46C38" fillOpacity="0.2" stroke="#F46C38" strokeWidth="1.5" />
          <line x1="252" y1="138" x2="324" y2="138" stroke="#FFFFFF" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" />
          <line x1="262" y1="152" x2="314" y2="152" stroke="#C5FF41" strokeOpacity="0.75" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="270" y="164" width="36" height="10" rx="3" fill="#F46C38" fillOpacity="0.35" />
        </g>
      );
  }
}

export function ProjectCoverFallback({
  theme,
  alt,
  size = 'thumb',
  className,
}: ProjectCoverFallbackProps) {
  return (
    <div
      className={cn(
        'relative aspect-[16/10] w-full overflow-hidden border select-none',
        size === 'hero' ? 'rounded-[14px]' : 'rounded-[10px]',
        THEME_CONTAINERS[theme],
        className
      )}
    >
      <svg
        role="img"
        aria-label={alt}
        viewBox="0 0 400 250"
        fill="none"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>{alt}</title>
        <CoverArtwork theme={theme} />
      </svg>
    </div>
  );
}
