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
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px',
          fontSize: 60,
          color: 'white',
          fontFamily: 'sans-serif',
          textAlign: 'center',
        }}
      >
        {text}
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}
