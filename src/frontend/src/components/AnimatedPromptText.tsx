import { useEffect, useState } from 'react';

interface AnimatedPromptTextProps {
  text: string;
  className?: string;
  useTypingEffect?: boolean;
}

export default function AnimatedPromptText({ 
  text, 
  className = '', 
  useTypingEffect = true 
}: AnimatedPromptTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!useTypingEffect) {
      setDisplayedText(text);
      setShowCursor(false);
      return;
    }

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [text, useTypingEffect]);

  if (!useTypingEffect) {
    return (
      <h1 className={`animate-fade-in ${className}`}>
        {text}
      </h1>
    );
  }

  return (
    <h1 className={className}>
      {displayedText}
      {showCursor && (
        <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 animate-pulse" />
      )}
    </h1>
  );
}

