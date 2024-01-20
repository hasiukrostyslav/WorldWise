import styled from 'styled-components';
import PriceCard from '../components/PriceCard';
import {
  SCREEN_SIZE,
  mediaQueries,
  mediaQueriesLandscape,
} from '../styles/mediaQueries';

const StyledPricingPage = styled.section`
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

function Pricing() {
  return (
    <StyledPricingPage>
      <PriceCard plan="Start" price="Free" device={1} disabled={false} />
      <PriceCard plan="Basic" price="$7.99" device={3} disabled={true} />
      <PriceCard plan="Premium" price="$12.99" device={5} disabled={true} />
    </StyledPricingPage>
  );
}

export default Pricing;
