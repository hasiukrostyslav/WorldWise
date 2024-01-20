import { StyledPricingPage } from '../styles/components/StyledPricingPage';
import PriceCard from '../components/PriceCard';

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
