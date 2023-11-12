import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = styled.section`
  margin: 2.5rem;
  height: calc(100vh - 5rem);
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url('/bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
`;

function HomeLayout() {
  return (
    <Layout>
      Home Layout
      <Outlet />
    </Layout>
  );
}

export default HomeLayout;
