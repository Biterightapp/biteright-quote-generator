import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);

  const text = searchParams.get('text') || 'Your gut deserves better. Start with one bite.';
  const header = searchParams.get('header') || 'REAL TALK';
  const hashtag1 = searchParams.get('hashtag1') || '#GutHealth';
  const hashtag2 = searchParams.get('hashtag2') || '#FiberFix';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to bottom right, #111111, #1a1a1a)',
          color: '#FF6F61',
          fontSize: 60,
          fontFamily: 'Poppins, sans-serif',
          padding: '100px',
          textAlign: 'center',
          lineHeight: 1.4,
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 'bold',
            letterSpacing: '1px',
            opacity: 0.5,
            marginBottom: 30,
            textTransform: 'uppercase',
          }}
        >
          {header}
        </div>

        <div style={{ maxWidth: 900, whiteSpace: 'pre-wrap' }}>{text}</div>

        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 80,
            fontSize: 22,
            opacity: 0.4,
          }}
        >
          @biteright.app
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 80,
            fontSize: 22,
            opacity: 0.4,
          }}
        >
          {hashtag1} {hashtag2}
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}
