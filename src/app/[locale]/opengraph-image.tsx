import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#151312',
          padding: '72px 80px',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '999px',
              backgroundColor: '#F46C38',
            }}
          />
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: '#998F8F',
              letterSpacing: '0.02em',
            }}
          >
            MOHAMED KAMALELDIN
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            MEDIA TECHNOLOGY &
          </span>
          <span
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
              color: '#F46C38',
            }}
          >
            AUTOMATION ENGINEER
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 26,
              color: '#998F8F',
            }}
          >
            Media Technology & AI Automation Engineer
          </span>
          <div
            style={{
              padding: '10px 22px',
              borderRadius: '10px',
              backgroundColor: '#C5FF41',
              color: '#121212',
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Istanbul, Türkiye
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
