import { createContext, useState } from 'react';

interface AppMenuContextType {
  isOpenMenu: boolean;
  toggleMenu: () => void;
  openMenu: () => void;
  closeMenu: () => void;
}

interface AppMenuProviderProps {
  children: React.ReactNode;
}

export const AppMenuContext = createContext<AppMenuContextType | null>(null);

export function AppMenuProvider({ children }: AppMenuProviderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  return (
    <AppMenuContext.Provider
      value={{ isOpenMenu, toggleMenu, openMenu, closeMenu }}
    >
      {children}
    </AppMenuContext.Provider>
  );
}
