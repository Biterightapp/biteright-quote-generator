import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get('text') || 'Track your gut. Fix your food. Try BiteRight.';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          color: '#FF6F61',
          fontSize: 60,
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
          textAlign: 'center',
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
