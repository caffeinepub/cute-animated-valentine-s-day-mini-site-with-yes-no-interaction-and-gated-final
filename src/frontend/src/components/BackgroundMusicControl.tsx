import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackgroundMusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/assets/audio/romantic-background.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log('Audio playback requires user interaction');
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleMusic}
        size="icon"
        variant="outline"
        className="rounded-full w-12 h-12 shadow-valentine bg-card/80 backdrop-blur-sm hover:bg-card border-valentine-pink/30"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-valentine-pink" />
        ) : (
          <VolumeX className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>
    </div>
  );
}

