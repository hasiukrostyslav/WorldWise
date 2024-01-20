import { Suspense, lazy, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppMenuProvider } from '../context/AppMenuContext';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { useLayer } from '../hooks/useLayer';
import Sidebar from '../components/Sidebar';
import MapSpinner from '../components/MapSpinner';
import { StyledAppLayout } from '../styles/components/StyledAppLayout';

const Map = lazy(() => import('../components/Map'));

function AppLayout() {
  const { matchMedia } = useMatchMedia({ minWidth: '540px' });
  const { isFullScreen, exitFullScreen } = useLayer();

  useEffect(() => {
    if (isFullScreen && !matchMedia) exitFullScreen();
  }, [matchMedia, isFullScreen, exitFullScreen]);

  return (
    <AppMenuProvider>
      <StyledAppLayout>
        <Sidebar>
          <Outlet />
        </Sidebar>
        <Suspense fallback={<MapSpinner />}>
          <Map />
        </Suspense>
      </StyledAppLayout>
    </AppMenuProvider>
  );
}

export default AppLayout;
