import styled from 'styled-components';

import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

import PriceCard from '../components/PriceCard';

const StyledPricing = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
    flex-direction: row;
    gap: 10rem;
  `}
`;

function Pricing() {
  return (
    <StyledPricing>
      <PriceCard plan="Start" price="Free" device={1} disabled={false} />
      <PriceCard plan="Basic" price="$7.99" device={3} disabled={true} />
      <PriceCard plan="Premium" price="$12.99" device={5} disabled={true} />
    </StyledPricing>
  );
}

export default Pricing;
