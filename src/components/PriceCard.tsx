import styled from 'styled-components';

import { ButtonLink } from './Button';
import { useUser } from '../hooks/useUser';

interface PriceCardProps {
  plan: string;
  price: string;
  device: number;
  disabled: boolean;
}

const StyledPriceCard = styled.div`
  background-color: var(--color-dark--1);
  width: 25rem;
  padding: 4rem 5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 4rem;
    padding: 2rem 0;
  }

  span {
    font-size: 1.4rem;
    padding-bottom: 4rem;
  }
`;

function PriceCard({ plan, price, device, disabled }: PriceCardProps) {
  const { user } = useUser();

  return (
    <StyledPriceCard>
      <h3>{plan}</h3>
      <h2>{price}</h2>
      <span>
        {device} {device === 1 ? 'device' : 'devices'}
      </span>
      <ButtonLink disabled={disabled} to={user ? '/app' : '/login'}>
        Get started
      </ButtonLink>
    </StyledPriceCard>
  );
}

export default PriceCard;
