import styled from 'styled-components';
import PriceCard from '../components/PriceCard';

const StyledPricing = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function Pricing() {
  return (
    <StyledPricing>
      <PriceCard plan="Start" price="Free" device={1} />
      <PriceCard plan="Basic" price="$7.99" device={3} />
      <PriceCard plan="Premium" price="$12.99" device={5} />
    </StyledPricing>
  );
}

export default Pricing;
