import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FF7844 0%, #F46C38 100%)',
          borderRadius: '42px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg
          width="180"
          height="180"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
