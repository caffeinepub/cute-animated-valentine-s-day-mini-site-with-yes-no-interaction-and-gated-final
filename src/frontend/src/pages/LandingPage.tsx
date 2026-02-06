import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AnimatedPromptText from '../components/AnimatedPromptText';
import NoMessagePopup from '../components/NoMessagePopup';
import CelebrationBurst from '../components/CelebrationBurst';
import { useNoButtonEvasion } from '../hooks/useNoButtonEvasion';

interface LandingPageProps {
  onYesClick: () => void;
  showCelebration: boolean;
}

const NO_MESSAGES = [
  "Are you sure? 🥺",
  "My heart just melted a little 💔",
  "Okay… I'll ask again nicely 🌸",
  "I'm not giving up on us 💗"
];

export default function LandingPage({ onYesClick, showCelebration }: LandingPageProps) {
  const [noClickCount, setNoClickCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const { buttonStyle, triggerEvasion } = useNoButtonEvasion();

  const handleNoClick = () => {
    const messageIndex = noClickCount % NO_MESSAGES.length;
    setCurrentMessage(NO_MESSAGES[messageIndex]);
    setShowMessage(true);
    setNoClickCount(prev => prev + 1);
    triggerEvasion();
  };

  const handleMessageEnd = () => {
    setShowMessage(false);
    setCurrentMessage(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="glass-card p-8 md:p-12 rounded-3xl shadow-valentine border-valentine-pink/20">
        <div className="text-center space-y-8">
          {/* Animated prompt */}
          <AnimatedPromptText
            text="Gunja, will you be my Valentine? 💖"
            className="text-3xl md:text-5xl font-bold gradient-text leading-tight"
            useTypingEffect={true}
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              onClick={onYesClick}
              size="lg"
              className="text-xl px-12 py-6 rounded-full bg-gradient-to-r from-valentine-pink to-valentine-rose hover:shadow-valentine transition-all duration-300 hover:scale-105 text-white font-semibold"
            >
              YES 💕
            </Button>

            <Button
              onClick={handleNoClick}
              size="lg"
              variant="outline"
              className="text-xl px-12 py-6 rounded-full border-2 border-valentine-pink/40 hover:border-valentine-pink transition-all duration-300 hover:animate-wiggle"
              style={buttonStyle}
            >
              NO 🙈
            </Button>
          </div>
        </div>
      </Card>

      {/* Message popup */}
      {showMessage && currentMessage && (
        <NoMessagePopup message={currentMessage} onAnimationEnd={handleMessageEnd} />
      )}

      {/* Celebration animation */}
      {showCelebration && <CelebrationBurst />}
    </div>
  );
}

