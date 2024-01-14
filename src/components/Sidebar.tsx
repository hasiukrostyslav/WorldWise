import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import { useGeolocation } from '../hooks/useGeolocation';
import { useCities } from '../hooks/useCities';
import { useLayer } from '../hooks/useLayer';
import { useAppMenu } from '../hooks/useAppMenu';
import { useMatchMediaLandScape } from '../hooks/useMatchMediaLandscape';
import {
  SCREEN_SIZE,
  mediaQueries,
  mediaQueriesLandscape,
} from '../styles/mediaQueries';

import Logo from './Logo';
import ToggleLinks from './ToggleLinks';
import Footer from './Footer';
import Spinner from './Spinner';
import Error from './Error';
import EmptyList from './EmptyList';
import { useMatchMedia } from '../hooks/useMatchMedia';

interface SidebarProps {
  children: React.ReactNode;
}

interface AsideProps {
  $hide: boolean | undefined;
  $isOpen: boolean;
}

const hide = {
  visible: css`
    bottom: 0rem;
    ${mediaQueries(SCREEN_SIZE.Tablet)` left: 0rem;`}
  `,
  hidden: css`
    bottom: -35rem;
    ${mediaQueries(SCREEN_SIZE.Tablet)` left: -45rem;`}
    ${mediaQueries(SCREEN_SIZE.SmallLaptop)` left: -50rem;`}
    ${mediaQueries(SCREEN_SIZE.Laptop)` left: -56rem;`}
  `,
};

const StyledSidebar = styled.aside<AsideProps>`
  ${(props) => (props.$hide ? hide.hidden : hide.visible)}

  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 3rem 5rem;
  background-color: var(--color-dark--1);
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: all 1s;
  z-index: 2000;

  ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
    display: flex;
    height: 30rem;
    width: 100%;
    padding: 1rem 2rem;
  `}

  ${mediaQueries(SCREEN_SIZE.Tablet)` 
    top: 0;
    height: calc(100dvh - 5rem);
    width: 45rem;
    padding: 3rem 5rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  `}
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` width: 50rem;`}
  ${mediaQueries(SCREEN_SIZE.Laptop)` width: 56rem;`}

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0;
    margin-bottom: 0;

    ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 1rem;
    `};
    ${mediaQueries(SCREEN_SIZE.Tablet)` 
    flex-direction: column;
    gap: 0;
    margin-bottom: 0;
    `};

    ${mediaQueriesLandscape()` 
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 1rem;`}
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
  const { isOpenMenu, closeMenu } = useAppMenu();
  const { matchMedia: matchMediaTablet } = useMatchMedia({
    minWidth: '768px',
  });
  const { matchMedia: matchMediaLandscape } = useMatchMediaLandScape();

  return (
    <StyledSidebar
      $hide={isFullScreen}
      $isOpen={isOpenMenu}
      style={{
        borderRadius: `${
          matchMediaLandscape && matchMediaTablet ? 'initial' : ''
        }`,

        height: `${matchMediaLandscape && matchMediaTablet ? '100%' : ''}`,
      }}
    >
      <div className="container">
        <div className="header">
          <Logo
            onClick={closeMenu}
            $size={matchMediaLandscape ? 'small' : 'large'}
          />
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
