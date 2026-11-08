import { permanentRedirect } from 'next/navigation';
import type { Locale } from '@/i18n/routing';

export default async function ToolsRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === 'ar' ? 'ar' : 'en';
  permanentRedirect(`/${locale}/approach`);
}
