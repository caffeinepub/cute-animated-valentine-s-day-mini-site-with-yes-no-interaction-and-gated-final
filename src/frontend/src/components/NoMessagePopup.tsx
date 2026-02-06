import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface NoMessagePopupProps {
  message: string;
  onAnimationEnd: () => void;
}

export default function NoMessagePopup({ message, onAnimationEnd }: NoMessagePopupProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onAnimationEnd, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="animate-bounce-in glass-card px-8 py-6 rounded-3xl shadow-valentine max-w-md mx-4">
        <div className="flex items-center gap-3">
          <Heart className="text-valentine-rose fill-valentine-rose animate-gentle-pulse" size={32} />
          <p className="text-xl font-medium text-foreground">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

