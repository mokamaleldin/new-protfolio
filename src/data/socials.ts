export interface SocialLink {
  id: 'linkedin' | 'github' | 'youtube' | 'instagram' | 'pinterest' | 'telegram';
  label: string;
  href?: string;
  enabled: boolean;
}

export const socials: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mokamaleldin/',
    enabled: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/mokamaleldin',
    enabled: true,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@mokamaleldin',
    enabled: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/m.ke.e/',
    enabled: true,
  },
  {
    id: 'pinterest',
    label: 'Pinterest',
    href: 'https://tr.pinterest.com/mokamaleldin/',
    enabled: true,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    // Configurable optional social link. Left unset until a confirmed personal Telegram URL is supplied.
    href: undefined,
    enabled: false,
  },
];

export const activeSocials = socials.filter((s) => s.enabled && Boolean(s.href));
