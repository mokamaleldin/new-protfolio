'use client';

import React, { useId } from 'react';
import { siteConfig } from '@/data/site-config';
import { activeSocials, type SocialLink } from '@/data/socials';
import type { Locale } from '@/i18n/routing';
import { OrbitFallback } from '@/components/three/OrbitFallback';
import { ProfilePortrait } from './ProfilePortrait';

interface ProfileCardProps {
  locale: Locale;
}

export function SocialSvg({
  id,
  className = 'h-[16px] w-[16px]',
}: {
  id: SocialLink['id'];
  className?: string;
}) {
  switch (id) {
    case 'linkedin':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'github':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case 'youtube':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Brand M monogram mark matching `/src/app/icon.svg` and `/src/app/apple-icon.tsx`.
 */
function BrandMonogramBadge() {
  const uid = useId();
  const bgId = `mk-card-bg-${uid}`;
  const clipId = `mk-card-clip-${uid}`;

  return (
    <div
      aria-hidden="true"
      className="mt-[12px] flex h-[32px] w-[32px] items-center justify-center rounded-[8px] animate-monogram-badge shadow-[0_4px_12px_rgba(244,108,56,0.35)]"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={bgId}
            x1="0"
            y1="0"
            x2="64"
            y2="64"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FF7844" />
            <stop offset="100%" stopColor="#F46C38" />
          </linearGradient>
          <clipPath id={clipId}>
            <rect width="64" height="64" rx="15" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect width="64" height="64" fill={`url(#${bgId})`} />
          <path
            d="M-6 18C10 34 34 30 44 -4"
            stroke="#CA592E"
            strokeWidth="2.5"
            strokeDasharray="4 4.5"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path
            d="M12.5 45.5V18.5H20.8L32 34.2L43.2 18.5H51.5V45.5H43.8V30.1L33.6 44.5H30.4L20.2 30.1V45.5H12.5Z"
            fill="#151312"
          />
        </g>
      </svg>
    </div>
  );
}

export function ProfileCard({ locale }: ProfileCardProps) {
  const name = siteConfig.owner.name[locale];
  const bio = siteConfig.owner.profileCardBio[locale];

  return (
    <aside
      aria-label={name}
      className="relative w-full md:w-[300px] lg:w-[320px] shrink-0 rounded-[20px] bg-white px-[20px] pt-[28px] pb-[22px] text-[#121212] shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:sticky md:top-[84px]"
    >
      {/* Static dashed orange orbital decoration */}
      <OrbitFallback />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Inner rounded orange portrait frame */}
        <ProfilePortrait locale={locale} />

        {/* Full Name */}
        <h2 className="mt-[20px] font-display text-[23px] sm:text-[24px] font-extrabold tracking-[-0.03em] text-[#121212] leading-[1.18]">
          {name}
        </h2>

        {/* Signature M monogram badge matching favicon identity */}
        <BrandMonogramBadge />

        {/* Short specialization bio */}
        <p className="mt-[12px] max-w-[260px] text-[14px] font-medium leading-[1.48] text-[#555659]">
          {bio}
        </p>

        {/* Uniform Social Media Links with icons & labels */}
        <ul className="mt-[18px] flex flex-wrap items-center justify-center gap-2">
          {activeSocials.map((social) => (
            <li key={social.id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[34px] items-center gap-1.5 rounded-[8px] border border-[#121212]/10 bg-[#121212]/[0.03] px-2.5 text-[12px] font-medium text-[#121212] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F46C38]/40 hover:bg-[#F46C38]/10 hover:text-[#CA592E] focus-visible:border-[#F46C38]/40 focus-visible:bg-[#F46C38]/10 focus-visible:text-[#CA592E]"
              >
                <span className="text-[#555659] transition-colors duration-200 group-hover:text-[#F46C38] group-focus-visible:text-[#F46C38]">
                  <SocialSvg id={social.id} className="h-[14px] w-[14px]" />
                </span>
                <span>{social.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
