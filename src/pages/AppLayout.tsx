import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import MapSpinner from '../components/MapSpinner';

const Map = lazy(() => import('../components/Map'));

const StyledAppLayout = styled.section`
  min-height: calc(100vh - 5rem);
  margin: 2.5rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar>
        <Outlet />
      </Sidebar>
      <Suspense fallback={<MapSpinner />}>
        <Map />
      </Suspense>
    </StyledAppLayout>
  );
}

export default AppLayout;
