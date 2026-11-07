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
            MOHAMED KAMALELDIN · محمد كمال الدين
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
            }}
          >
            MEDIA TECH
          </span>
          <span
            style={{
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: '-0.04em',
              color: '#353334',
            }}
          >
            ENGINEER
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
            Systems Analysis · Solution Design · AI Workflow Automation
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
