import { useState, useEffect } from 'react';

const SESSION_KEY = 'valentine_access_granted';

export function useValentineSessionGate() {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    // Check if access was granted in this session
    const accessGranted = sessionStorage.getItem(SESSION_KEY) === 'true';
    setHasAccess(accessGranted);
  }, []);

  const grantAccess = () => {
    sessionStorage.setItem(SESSION_KEY, 'true');
    setHasAccess(true);
  };

  const revokeAccess = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setHasAccess(false);
  };

  return {
    hasAccess,
    grantAccess,
    revokeAccess
  };
}

