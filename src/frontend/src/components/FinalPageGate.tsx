import { ReactNode } from 'react';
import { useValentineSessionGate } from '../hooks/useValentineSessionGate';
import LandingPage from '../pages/LandingPage';

interface FinalPageGateProps {
  children: ReactNode;
}

export default function FinalPageGate({ children }: FinalPageGateProps) {
  const { hasAccess } = useValentineSessionGate();

  if (!hasAccess) {
    return <LandingPage onYesClick={() => {}} showCelebration={false} />;
  }

  return <>{children}</>;
}

