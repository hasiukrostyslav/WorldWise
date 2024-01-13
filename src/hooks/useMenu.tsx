import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) throw new Error('useMenu has to be used within MenuProvider');

  const isOpenMenu = context.isOpenMenu;
  const closeMenu = context.closeMenu;
  const toggleMenu = context.toggleMenu;

  return { isOpenMenu, closeMenu, toggleMenu };
}
