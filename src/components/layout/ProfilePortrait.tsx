'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/i18n/routing';
import { siteConfig } from '@/data/site-config';
import { profileSceneLabels } from '@/data/profile-scene';
import { WorkspaceArtwork } from '@/components/profile-scene/WorkspaceArtwork';
import { CHAPTERS, DURATION, STILL_TIME, sceneAttributes } from '@/components/profile-scene/timeline';

export function ProfilePortrait({ locale }: { locale: Locale }) {
  const [viewMode, setViewMode] = useState<'photo' | 'workspace'>('photo');
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timeRef = useRef(STILL_TIME);
  const manualPauseRef = useRef(false);
  const syncRef = useRef<() => void>(() => {});
  const [running, setRunning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const text = profileSceneLabels[locale];

  useEffect(() => {
    if (viewMode !== 'workspace') return;
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;
    const parts = new Map(
      Array.from(svg.querySelectorAll<SVGElement>('[data-part]')).map((node) => [
        node.dataset.part!,
        node,
      ]),
    );
    const previous = new Map<string, string>();
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inViewport = false;
    let request = 0;
    let last = 0;
    let painted = 0;

    const draw = (time: number) => {
      const attributes = sceneAttributes(time);
      for (const [part, values] of Object.entries(attributes)) {
        const element = parts.get(part);
        if (!element) continue;
        for (const [property, value] of Object.entries(values)) {
          const key = `${part}:${property}`;
          const serialized = String(value);
          if (previous.get(key) === serialized) continue;
          element.setAttribute(
            property.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
            serialized,
          );
          previous.set(key, serialized);
        }
      }
      svg.dataset.sceneTime = time.toFixed(3);
      svg.dataset.chapter = CHAPTERS.find(
        (chapter) => time >= chapter.start && time < chapter.end,
      )?.name;
    };

    const tick = (now: number) => {
      if (last) {
        timeRef.current = (timeRef.current + Math.min(now - last, 80) / 1000) % DURATION;
      }
      last = now;
      if (now - painted >= 1000 / 30) {
        draw(timeRef.current);
        painted = now;
      }
      request = window.requestAnimationFrame(tick);
    };

    const sync = () => {
      const canPlay =
        inViewport && !document.hidden && !preference.matches && !manualPauseRef.current;
      setReducedMotion(preference.matches);
      setRunning(canPlay);
      if (!canPlay) {
        window.cancelAnimationFrame(request);
        request = 0;
        last = 0;
        if (preference.matches) draw(STILL_TIME);
      } else if (!request) {
        draw(timeRef.current);
        request = window.requestAnimationFrame(tick);
      }
    };
    syncRef.current = sync;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    observer.observe(container);
    document.addEventListener('visibilitychange', sync);
    preference.addEventListener('change', sync);
    sync();
    return () => {
      window.cancelAnimationFrame(request);
      observer.disconnect();
      document.removeEventListener('visibilitychange', sync);
      preference.removeEventListener('change', sync);
      syncRef.current = () => {};
    };
  }, [viewMode]);

  const togglePause = () => {
    manualPauseRef.current = !manualPauseRef.current;
    setUserPaused(manualPauseRef.current);
    syncRef.current();
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'photo' ? 'workspace' : 'photo'));
  };

  const switchLabel =
    viewMode === 'photo'
      ? locale === 'ar'
        ? 'عرض المشهد الإبداعي المتحرك'
        : 'View animated creative workspace'
      : locale === 'ar'
        ? 'عرض الصورة الشخصية'
        : 'View portrait photograph';

  const pauseLabel = userPaused ? text.resume : text.pause;

  return (
    <div
      ref={containerRef}
      data-portrait-player=""
      data-playback={running ? 'playing' : 'paused'}
      className="group relative h-[264px] w-[224px] sm:h-[280px] sm:w-[238px] overflow-hidden rounded-[16px] bg-[#151312] shadow-[0_12px_24px_rgba(202,89,46,0.28)]"
    >
      {viewMode === 'photo' ? (
        <Image
          src={siteConfig.profileImage.src}
          alt={siteConfig.profileImage.alt[locale]}
          fill
          priority
          sizes="240px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <>
          <WorkspaceArtwork
            ref={svgRef}
            idPrefix={`workspace-${uid}`}
            title={text.title}
            description={text.description}
            time={STILL_TIME}
          />
          {!reducedMotion ? (
            <button
              type="button"
              aria-label={pauseLabel}
              title={pauseLabel}
              aria-pressed={userPaused}
              onClick={togglePause}
              className="absolute right-2.5 bottom-2.5 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-[#F4EFE7]/20 bg-[#151312]/80 text-[#F4EFE7] hover:bg-[#151312] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F46C38]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                {userPaused ? <path d="m8 4 12 8-12 8z" /> : <path d="M6 4h4v16H6zm8 0h4v16h-4z" />}
              </svg>
            </button>
          ) : null}
        </>
      )}

      {/* Switch between real portrait and interactive workspace */}
      <button
        type="button"
        onClick={toggleViewMode}
        aria-label={switchLabel}
        title={switchLabel}
        className="absolute top-2.5 right-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#151312]/80 text-white/90 backdrop-blur-xs transition-all duration-200 hover:scale-105 hover:bg-[#151312] hover:text-[#F46C38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F46C38]"
      >
        {viewMode === 'photo' ? (
          // Icon representing animation / creative workspace
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        ) : (
          // Icon representing camera / real photograph
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        )}
      </button>
    </div>
  );
}
