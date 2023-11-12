import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import Navbar from '../components/Navbar';

const Layout = styled.div`
  min-height: calc(100vh - 5rem);
  margin: 2.5rem;
  padding: 2.5rem 5rem;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url('/bg.jpg');
  background-size: cover;
  background-position: center;
`;

function HomeLayout() {
  return (
    <Layout>
      <Navbar />
      <Outlet />
    </Layout>
  );
}

export default HomeLayout;
