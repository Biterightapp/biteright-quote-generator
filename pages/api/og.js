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
          backgroundColor: '#FF6F61',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px',
          fontSize: 56,
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
          lineHeight: 1.4,
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {text}
        </div>

        <div
          style={{
            fontSize: 24,
            marginTop: 40,
            color: '#fff',
            opacity: 0.9,
            letterSpacing: '1px',
          }}
        >
          @biteright.app
