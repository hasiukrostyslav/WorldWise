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
    bottom: 0rem;
    ${mediaQueries(SCREEN_SIZE.Tablet)` left: 0rem;`}
  `,
  hidden: css`
    bottom: -25rem;
    ${mediaQueries(SCREEN_SIZE.Tablet)` left: -45rem;`}
    ${mediaQueries(SCREEN_SIZE.SmallLaptop)` left: -50rem;`}
    ${mediaQueries(SCREEN_SIZE.Laptop)` left: -56rem;`}
  `,
};

const StyledSidebar = styled.aside<AsideProps>`
  ${(props) => (props.$hide ? hide.hidden : hide.visible)}
  position: absolute;
  left: 0;
  height: 30rem;
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--color-dark--1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: bottom 1s;

  ${mediaQueries(SCREEN_SIZE.Tablet)` 
    width: 45rem;
    top: 0;
    padding: 3rem 5rem;
    height: calc(100vh - 5rem);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    transition: left 1s;
  `}
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` width: 50rem;`}
  ${mediaQueries(SCREEN_SIZE.Laptop)` width: 56rem;`}

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
    ${mediaQueries(SCREEN_SIZE.Tablet)` 
    flex-direction: column;
    gap: 0;
    margin-bottom: 0;
    `};
  }

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
        <div className="header">
          <Logo />
          <ToggleLinks />
        </div>
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
