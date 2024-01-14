import { Suspense, lazy, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { AppMenuProvider } from '../context/AppMenuContext';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { useLayer } from '../hooks/useLayer';
import {
  SCREEN_SIZE,
  mediaQueries,
  mediaQueriesLandscape,
} from '../styles/mediaQueries';

import Sidebar from '../components/Sidebar';
import MapSpinner from '../components/MapSpinner';

const Map = lazy(() => import('../components/Map'));

const StyledAppLayout = styled.section`
  min-height: 100dvh;
  overflow: hidden;
  position: relative;
  border-radius: initial;

  ${mediaQueries(SCREEN_SIZE.Tablet)` 
    margin: 2.5rem;
    border-radius: 1rem;
    min-height: calc(100dvh - 5rem);
  `}

  ${mediaQueriesLandscape()` 
    margin: 0;
    border-radius: initial;
    min-height: 100dvh;
  `}
`;

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
