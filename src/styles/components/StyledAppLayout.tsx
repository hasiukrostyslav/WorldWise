import styled from 'styled-components';
import {
  SCREEN_SIZE,
  mediaQueries,
  mediaQueriesLandscape,
} from '../mediaQueries';

export const StyledAppLayout = styled.section`
  min-height: 100dvh;
  overflow: hidden;
  position: relative;
  border-radius: initial;

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
