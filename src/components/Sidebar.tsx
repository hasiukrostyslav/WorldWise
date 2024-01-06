import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { useGeolocation } from '../hooks/useGeolocation';
import { useCities } from '../hooks/useCities';
import { useLayer } from '../hooks/useLayer';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

import Logo from './Logo';
import ToggleLinks from './ToggleLinks';
import Footer from './Footer';
import Spinner from './Spinner';
import Error from './Error';
import EmptyList from './EmptyList';

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
    ${mediaQueries(SCREEN_SIZE.Tablet)` left: -45rem;`}
    ${mediaQueries(SCREEN_SIZE.SmallLaptop)` left: -50rem;`}
    ${mediaQueries(SCREEN_SIZE.Laptop)` left: -56rem;`}
    left: -40rem;
  `,
};

const StyledSidebar = styled.aside<AsideProps>`
  ${(props) => (props.$hide ? hide.hidden : hide.visible)}
  position: absolute;
  top: 0;
  width: 40rem;
  padding: 3rem 5rem;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: var(--color-dark--1);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  transition: left 1s;

  ${mediaQueries(SCREEN_SIZE.Tablet)` width: 45rem;`}
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` width: 50rem;`}
  ${mediaQueries(SCREEN_SIZE.Laptop)` width: 56rem;`}

  .container {
    width: 100%;
    height: calc(100% - 5rem);
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
        {!isLoading && children}
      </div>
      <Footer />
    </StyledSidebar>
  );
}

export default Sidebar;
