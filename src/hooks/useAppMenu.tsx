import { useContext } from 'react';
import { AppMenuContext } from '../context/AppMenuContext';

export function useAppMenu() {
  const context = useContext(AppMenuContext);

  if (!context)
    throw new Error('useAppMenu has to be used within AppMenuProvider');

  const isOpenMenu = context.isOpenMenu;
  const openMenu = context.openMenu;
  const closeMenu = context.closeMenu;
  const toggleMenu = context.toggleMenu;

  return { isOpenMenu, openMenu, closeMenu, toggleMenu };
}
