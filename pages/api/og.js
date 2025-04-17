import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);

  const text = searchParams.get('text') || 'Track your gut. Fix your food.';
  const emoji = ['🧠', '🥦', '🔥', '💡', '🌿', '🧬'][Math.floor(Math.random() * 6)];
  const quoteLength = text.length;

  // Font size logic
  const fontSize = quoteLength <= 80 ? 64 : quoteLength <= 160 ? 52 : 44;

  // Rotating gradient backgrounds
  const gradients = [
    'linear-gradient(135deg, #FF6F61, #FFE3DC)',
    'radial-gradient(circle at top left, #FF6F61, #FDEDEC)',
    'linear-gradient(135deg, #FF6F61, #F7FFF7)',
    'linear-gradient(to bottom right, #FF6F61, #F06292)',
    'radial-gradient(circle at center, #FF6F61, #FFFFFF)'
  ];
  const background = gradients[Math.floor(Math.random() * gradients.length)];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '100px 80px',
          color: '#ffffff',
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <img
          src="https://biteright-quote-generator-2yja.vercel.app/biterightlogo-colored.png"
          width="120"
          alt="BiteRight Logo"
          style={{
            position: 'absolute',
            top: 60,
            left: 60,
          }}
        />

        {/* Emoji flair for short quotes */}
        {quoteLength <= 120 && (
          <div
            style={{
              fontSize: 48,
              marginBottom: 20,
            }}
          >
            {emoji}
          </div>
        )}

        {/* Main Quote */}
        <div
          style={{
            maxWidth: 900,
            fontSize,
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap',
          }}
        >
          {text}
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 80,
            fontSize: 24,
            opacity: 0.6,
          }}
        >
          Track your gut. Fix your food.
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1350,
    }
  );
}
