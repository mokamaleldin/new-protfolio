'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import type { Locale } from '@/i18n/routing';
import type { ProfileSceneAsset } from '@/data/profile-scene';

const labels = {
  en: {
    pause: 'Pause animation',
    resume: 'Resume animation',
    poster: 'Cartoon portrait of Mohamed Kamaleldin welcoming you to his workspace',
    description:
      'Mohamed welcomes you, understands a client brief, analyzes a workflow, designs a solution, builds and refines it, then returns to greet you.',
  },
  ar: {
    pause: 'إيقاف الحركة مؤقتًا',
    resume: 'استئناف الحركة',
    poster: 'صورة كرتونية لمحمد كمال الدين يرحب بك في مساحة عمله',
    description:
      'يرحب بك محمد، ثم يفهم متطلبات العميل ويحلل سير العمل ويصمم الحل ويطوره ويحسنه، ثم يعود للترحيب بك.',
  },
} as const;

interface ProfilePortraitProps {
  locale: Locale;
  photoSrc: string;
  photoAlt: string;
  scene: ProfileSceneAsset | null;
}

function AnimatedPortrait({
  scene,
  locale,
}: {
  scene: ProfileSceneAsset;
  locale: Locale;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoId = useId();
  // Conservative initial state: SSR and reduced-motion visitors get the poster.
  const [reducedMotion, setReducedMotion] = useState(true);
  const [environmentAllowsPlayback, setEnvironmentAllowsPlayback] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);
  const [failed, setFailed] = useState(false);
  const text = labels[locale];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inViewport = false;

    const update = () => {
      const allowed = inViewport && !document.hidden && !preference.matches;
      setReducedMotion(preference.matches);
      setEnvironmentAllowsPlayback(allowed);
      if (allowed) setLoadVideo(true);
      else videoRef.current?.pause();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );

    observer.observe(container);
    preference.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    update();

    return () => {
      observer.disconnect();
      preference.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
      videoRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!environmentAllowsPlayback || userPaused || failed) {
      video.pause();
      return;
    }

    let cancelled = false;
    video.muted = true;
    void video.play().catch((error: unknown) => {
      // Visibility changes can cancel a pending play; that isn't a user pause.
      if (!cancelled && !(error instanceof DOMException && error.name === 'AbortError')) {
        setUserPaused(true);
      }
    });

    return () => {
      cancelled = true;
      video.pause();
    };
  }, [environmentAllowsPlayback, userPaused, failed, loadVideo]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      setUserPaused(true);
      video.pause();
    } else if (environmentAllowsPlayback) {
      setUserPaused(false);
      // Call within the gesture as well, for browsers that restrict autoplay.
      void video.play().catch(() => setUserPaused(true));
    }
  };

  const controlLabel = isPlaying ? text.pause : text.resume;

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Image
        src={scene.poster}
        alt={text.poster}
        fill
        priority
        sizes="240px"
        className="object-cover object-center"
      />
      <p className="sr-only">{text.description}</p>
      {loadVideo && !failed ? (
        <video
          ref={videoRef}
          id={videoId}
          aria-hidden="true"
          muted
          playsInline
          loop
          preload="none"
          poster={scene.poster}
          disablePictureInPicture
          onLoadedData={() => setHasFrame(true)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => {
            setFailed(true);
            setIsPlaying(false);
          }}
          className={`absolute inset-0 h-full w-full object-cover object-center ${
            hasFrame && !reducedMotion ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {scene.webm ? <source src={scene.webm} type="video/webm" /> : null}
          <source src={scene.mp4} type="video/mp4" />
        </video>
      ) : null}
      {loadVideo && !reducedMotion && !failed ? (
        <button
          type="button"
          aria-label={controlLabel}
          aria-controls={videoId}
          title={controlLabel}
          onClick={togglePlayback}
          className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#151312]/80 text-[#F4EFE7] shadow-sm hover:bg-[#151312] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F46C38]"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            {isPlaying ? (
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            ) : (
              <path d="m8 4 12 8-12 8z" />
            )}
          </svg>
        </button>
      ) : null}
    </div>
  );
}

export function ProfilePortrait({ locale, photoSrc, photoAlt, scene }: ProfilePortraitProps) {
  return (
    <div className="relative h-[264px] w-[224px] sm:h-[280px] sm:w-[238px] overflow-hidden rounded-[16px] bg-[#CA592E] shadow-[0_12px_24px_rgba(202,89,46,0.28)]">
      {scene ? (
        <AnimatedPortrait key={scene.mp4} scene={scene} locale={locale} />
      ) : (
        <Image
          src={photoSrc}
          alt={photoAlt}
          fill
          priority
          sizes="240px"
          className="object-cover object-top"
        />
      )}
    </div>
  );
}
