import { createContext, useState } from 'react';

interface MenuContextType {
  isOpenMenu: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

interface NavigationMenuProviderProps {
  children: React.ReactNode;
}

export const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: NavigationMenuProviderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
  const closeMenu = () => setIsOpenMenu(false);

  return (
    <MenuContext.Provider value={{ isOpenMenu, toggleMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
