import styled from 'styled-components';
import {
  SCREEN_SIZE,
  mediaQueries,
  mediaQueriesLandscape,
} from '../mediaQueries';

export const AboutPage = styled.section`
  flex-grow: 1;
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;

  ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
    flex-direction: row;
    margin-top: 0;
  `}

  & div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: end;

    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
      ${mediaQueries(SCREEN_SIZE.Tablet)` font-size: 4rem;`}
      ${mediaQueriesLandscape()` font-size: 3rem;`}
    }

    p {
      text-align: end;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      ${mediaQueries(SCREEN_SIZE.Tablet)` font-size: 1.6rem;`}
      ${mediaQueriesLandscape()` font-size: 1.4rem;`}
    }
  }

  & img {
    width: 80%;
    border-radius: 1rem;
    ${mediaQueries(SCREEN_SIZE.SmallTablet)` width: 50rem;`}
    ${mediaQueriesLandscape()` width: 40rem;`}
  }
`;
