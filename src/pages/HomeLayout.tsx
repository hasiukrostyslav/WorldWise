import { Outlet } from 'react-router-dom';
import { MenuProvider } from '../context/MenuContext';
import { StyledHomeLayout } from '../styles/components/StyledHomeLayout';
import Navbar from '../components/Navbar';

function HomeLayout() {
  return (
    <MenuProvider>
      <StyledHomeLayout>
        <Navbar />
        <Outlet />
      </StyledHomeLayout>
    </MenuProvider>
  );
}

export default HomeLayout;
