'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { Locale } from '@/i18n/routing';
import { profileSceneLabels } from '@/data/profile-scene';
import { WorkspaceArtwork } from '@/components/profile-scene/WorkspaceArtwork';
import { CHAPTERS, DURATION, STILL_TIME, sceneAttributes } from '@/components/profile-scene/timeline';

/** A single clock drives the rig and its prop contacts. No React renders per frame. */
export function ProfilePortrait({ locale }: { locale: Locale }) {
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
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;
    const parts = new Map(Array.from(svg.querySelectorAll<SVGElement>('[data-part]'))
      .map((node) => [node.dataset.part!, node]));
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
          element.setAttribute(property.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`), serialized);
          previous.set(key, serialized);
        }
      }
      svg.dataset.sceneTime = time.toFixed(3);
      svg.dataset.chapter = CHAPTERS.find((chapter) => time >= chapter.start && time < chapter.end)?.name;
    };

    const tick = (now: number) => {
      if (last) timeRef.current = (timeRef.current + Math.min(now - last, 80) / 1000) % DURATION;
      last = now;
      // 30 fps is ample at this card size. The clock still retains exact time.
      if (now - painted >= 1000 / 30) { draw(timeRef.current); painted = now; }
      request = window.requestAnimationFrame(tick);
    };

    const sync = () => {
      const canPlay = inViewport && !document.hidden && !preference.matches && !manualPauseRef.current;
      setReducedMotion(preference.matches);
      setRunning(canPlay);
      if (!canPlay) {
        window.cancelAnimationFrame(request);
        request = 0; last = 0;
        if (preference.matches) draw(STILL_TIME);
      } else if (!request) {
        draw(timeRef.current);
        request = window.requestAnimationFrame(tick);
      }
    };
    syncRef.current = sync;
    const observer = new IntersectionObserver(([entry]) => {
      inViewport = entry.isIntersecting;
      sync();
    }, { threshold: 0 });
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
  }, []);

  const toggle = () => {
    manualPauseRef.current = !manualPauseRef.current;
    setUserPaused(manualPauseRef.current);
    syncRef.current();
  };
  const controlLabel = userPaused ? text.resume : text.pause;

  return (
    <div ref={containerRef} data-portrait-player="" data-playback={running ? 'playing' : 'paused'}
      className="relative h-[264px] w-[224px] sm:h-[280px] sm:w-[238px] overflow-hidden rounded-[16px] bg-[#151312] shadow-[0_12px_24px_rgba(202,89,46,0.28)]">
      <WorkspaceArtwork ref={svgRef} idPrefix={`workspace-${uid}`} title={text.title} description={text.description} time={STILL_TIME} />
      {!reducedMotion ? (
        <button type="button" aria-label={controlLabel} title={controlLabel} aria-pressed={userPaused}
          onClick={toggle}
          className="absolute right-2.5 bottom-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#F4EFE7]/20 bg-[#151312]/80 text-[#F4EFE7] hover:bg-[#151312] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F46C38]">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
            {userPaused ? <path d="m8 4 12 8-12 8z" /> : <path d="M6 4h4v16H6zm8 0h4v16h-4z" />}
          </svg>
        </button>
      ) : null}
    </div>
  );
}
