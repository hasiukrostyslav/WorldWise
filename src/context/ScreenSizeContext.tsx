import { createContext, useState } from 'react';

interface ScreenSizeContextType {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
}

interface ScreenSizeProviderProps {
  children: React.ReactNode;
}

export const ScreenSizeContext = createContext<ScreenSizeContextType | null>(
  null
);

export function ScreenSizeProvider({ children }: ScreenSizeProviderProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  function toggleFullScreen() {
    setIsFullScreen(!isFullScreen);
  }

  return (
    <ScreenSizeContext.Provider value={{ isFullScreen, toggleFullScreen }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}
