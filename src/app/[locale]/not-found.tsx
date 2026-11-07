import React from 'react';
import { Link } from '@/i18n/navigation';
import { SectionHeading } from '@/components/sections/SectionHeading';

export default function NotFoundPage() {
  return (
    <div className="pt-4">
      <SectionHeading as="h1" size="hero" line1="404" line2="NOT FOUND" />
      <p className="mt-4 text-[15px] text-[#998F8F]">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex h-[42px] items-center justify-center rounded-[8px] bg-[#F46C38] px-5 text-[14px] font-semibold text-white hover:bg-[#e35c27]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
