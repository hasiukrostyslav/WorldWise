import { createContext, useState } from 'react';

interface ScreenSizeContextType {
  isFullScreen: boolean;
  exitFullScreen: () => void;
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

  const exitFullScreen = () => setIsFullScreen(false);
  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

  return (
    <ScreenSizeContext.Provider
      value={{ isFullScreen, exitFullScreen, toggleFullScreen }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
}
