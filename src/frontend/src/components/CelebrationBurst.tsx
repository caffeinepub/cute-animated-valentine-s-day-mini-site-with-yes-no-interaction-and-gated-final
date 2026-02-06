import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function CelebrationBurst() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate burst hearts
    const burstHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
      delay: Math.random() * 0.3
    }));
    setHearts(burstHearts);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 overflow-hidden">
      {/* Central burst */}
      <div className="relative">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-heart-burst"
            style={{
              left: '50%',
              top: '50%',
              animationDelay: `${heart.delay}s`,
              '--heart-x': `${heart.x}px`,
              '--heart-y': `${heart.y}px`
            } as React.CSSProperties}
          >
            <Heart
              size={24 + Math.random() * 20}
              className="fill-valentine-pink text-valentine-pink"
            />
          </div>
        ))}
      </div>

      {/* Confetti hearts falling */}
      {Array.from({ length: 15 }, (_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute animate-confetti-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-50px',
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${2 + Math.random()}s`
          }}
        >
          <Heart
            size={16 + Math.random() * 16}
            className="fill-valentine-rose text-valentine-rose"
          />
        </div>
      ))}
    </div>
  );
}

