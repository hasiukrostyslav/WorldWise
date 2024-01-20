import styled from 'styled-components';
import {
  SCREEN_SIZE,
  mediaQueries,
  mediaQueriesLandscape,
} from '../mediaQueries';

export const StyledPricingPage = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
    flex-direction: row;
    gap: 10rem;
    margin-top: 0;
  `}
  ${mediaQueriesLandscape()` 
    gap: 4rem;
  `}
`;
