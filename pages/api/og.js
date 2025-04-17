import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text') || 'Your gut deserves better. Start with one bite.';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '100px',
          fontSize: 64,
          color: 'white',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          lineHeight: 1.4,
          position: 'relative',
        }}
      >
        <div>{text}</div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 80,
            fontSize: 24,
            opacity: 0.4,
          }}
        >
          @biteright.app
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}
