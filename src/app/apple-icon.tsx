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
          backgroundColor: '#151312',
          borderRadius: '38px',
          position: 'relative',
          color: '#FFFFFF',
          fontSize: 82,
          fontWeight: 800,
          letterSpacing: '-0.06em',
        }}
      >
        <span>MK</span>
        <div
          style={{
            position: 'absolute',
            top: 28,
            right: 28,
            width: 18,
            height: 18,
            borderRadius: '999px',
            backgroundColor: '#F46C38',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
