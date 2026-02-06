import { useState, useCallback } from 'react';

export function useNoButtonEvasion() {
  const [dodgeCount, setDodgeCount] = useState(0);
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>({});

  const triggerEvasion = useCallback(() => {
    setDodgeCount(prev => prev + 1);

    // Calculate safe dodge distance (smaller on mobile)
    const isMobile = window.innerWidth < 640;
    const maxDodge = isMobile ? 30 : 50;
    
    const dodgeX = (Math.random() - 0.5) * maxDodge;
    const dodgeY = (Math.random() - 0.5) * maxDodge;
    
    // Apply dodge with scale effect
    const scale = Math.max(0.85, 1 - dodgeCount * 0.03);
    
    setButtonStyle({
      transform: `translate(${dodgeX}px, ${dodgeY}px) scale(${scale})`,
      transition: 'transform 0.3s ease-out'
    });

    // Reset after animation
    setTimeout(() => {
      setButtonStyle({
        transform: `scale(${scale})`,
        transition: 'transform 0.3s ease-out'
      });
    }, 300);
  }, [dodgeCount]);

  return {
    buttonStyle,
    triggerEvasion,
    dodgeCount
  };
}

