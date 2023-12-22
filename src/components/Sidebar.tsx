import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { useGeolocation } from '../hooks/useGeolocation';
import { useCities } from '../hooks/useCities';

import Logo from './Logo';
import ToggleLinks from './ToggleLinks';
import Footer from './Footer';
import Spinner from './Spinner';
import Error from './Error';
import EmptyList from './EmptyList';
import { useLayer } from '../hooks/useLayer';

interface SidebarProps {
  children: React.ReactNode;
}

interface AsideProps {
  $hide: boolean | undefined;
}

const hide = {
  visible: css`
    left: 0rem;
  `,
  hidden: css`
    left: -56rem;
  `,
};

const StyledSidebar = styled.aside<AsideProps>`
  ${(props) => (props.$hide ? hide.hidden : hide.visible)}
  position: absolute;
  top: 0;
  width: 56rem;
  padding: 3rem 5rem;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark--1);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  transition: left 1s;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Sidebar({ children }: SidebarProps) {
  const { cities, isLoading, isError } = useCities();
  const { error: geolocationError } = useGeolocation();
  const [searchParams] = useSearchParams();
  const { isFullScreen } = useLayer();

  return (
    <StyledSidebar $hide={isFullScreen}>
      <div className="container">
        <Logo />
        <ToggleLinks />
        {isLoading && <Spinner />}
        {isError && !searchParams.get('lat') && (
          <Error message={geolocationError ? geolocationError : ''} />
        )}
        {cities?.length === 0 && !searchParams.get('lat') && <EmptyList />}
        {children}
      </div>
      <Footer />
    </StyledSidebar>
  );
}

export default Sidebar;
