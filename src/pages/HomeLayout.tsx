import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import { MenuProvider } from '../context/MenuContext';
import {
  SCREEN_SIZE,
  mediaQueries,
  mediaQueriesLandscape,
} from '../styles/mediaQueries';

import Navbar from '../components/Navbar';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  padding: 2.5rem 5rem;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url('/bg.jpg');
  background-size: cover;
  background-position: center;

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

function HomeLayout() {
  return (
    <MenuProvider>
      <Layout>
        <Navbar />
        <Outlet />
      </Layout>
    </MenuProvider>
  );
}

export default HomeLayout;
