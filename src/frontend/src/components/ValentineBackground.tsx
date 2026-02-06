import { Heart, Sparkles } from 'lucide-react';

export default function ValentineBackground() {
  // Generate random positions and delays for hearts
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 4}s`,
    size: 20 + Math.random() * 30,
    animationType: i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float-slow' : 'animate-float-reverse'
  }));

  // Generate sparkles
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    size: 8 + Math.random() * 12
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-valentine-blush/20 via-background to-valentine-pink/10" />
      
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className={`absolute ${heart.animationType} opacity-20`}
          style={{
            left: heart.left,
            bottom: '-50px',
            animationDelay: heart.delay,
            animationDuration: heart.duration
          }}
        >
          <Heart
            size={heart.size}
            className="fill-valentine-pink text-valentine-pink"
          />
        </div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={`sparkle-${sparkle.id}`}
          className="absolute animate-twinkle"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay
          }}
        >
          <Sparkles
            size={sparkle.size}
            className="text-valentine-sparkle"
          />
        </div>
      ))}
    </div>
  );
}

