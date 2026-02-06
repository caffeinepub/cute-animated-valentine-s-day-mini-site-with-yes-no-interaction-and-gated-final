import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import FinalPage from './pages/FinalPage';
import ValentineBackground from './components/ValentineBackground';
import BackgroundMusicControl from './components/BackgroundMusicControl';
import { useValentineSessionGate } from './hooks/useValentineSessionGate';

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const { hasAccess, grantAccess } = useValentineSessionGate();

  const handleYesClick = () => {
    setShowCelebration(true);
    grantAccess();
    
    // Transition to final page after celebration
    setTimeout(() => {
      setShowCelebration(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden container-safe">
      <ValentineBackground />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {!hasAccess ? (
          <LandingPage onYesClick={handleYesClick} showCelebration={showCelebration} />
        ) : (
          <FinalPage />
        )}
      </main>

      <BackgroundMusicControl />
      
      <footer className="relative z-10 py-6 text-center text-sm text-muted-foreground">
        <p>© 2026. Built with 💖 using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">caffeine.ai</a></p>
      </footer>
    </div>
  );
}

export default App;

