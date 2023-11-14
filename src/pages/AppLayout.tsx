import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Map from '../components/Map';

const StyledAppLayout = styled.section`
  display: flex;
  min-height: calc(100vh - 5rem);
  margin: 2.5rem;
  border-radius: 1rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar>
        <Outlet />
      </Sidebar>
      <Map />
    </StyledAppLayout>
  );
}

export default AppLayout;
