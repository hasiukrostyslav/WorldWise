import { useEffect, useState } from 'react';

interface useMatchMediaProps {
  minWidth: string;
}

export function useMatchMedia({ minWidth }: useMatchMediaProps) {
  const [matchMedia, setMatchMedia] = useState(
    window.matchMedia(`(min-width: ${minWidth})`).matches
  );

  useEffect(() => {
    window
      .matchMedia(`(min-width: ${minWidth})`)
      .addEventListener('change', (e) => {
        setMatchMedia(e.matches);
      });
  }, [minWidth]);

  return { matchMedia };
}
