import { useEffect, useState } from 'react';

export function useMatchMediaLandScape() {
  const [matchMedia, setMatchMedia] = useState(
    window.matchMedia(`(max-height: 500px)`).matches
  );

  useEffect(() => {
    window.matchMedia(`(max-height: 500px)`).addEventListener('change', (e) => {
      setMatchMedia(e.matches);
    });
  }, []);

  return { matchMedia };
}
