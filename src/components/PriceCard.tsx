import styled from 'styled-components';

import { useUser } from '../hooks/useUser';
import {
  SCREEN_SIZE,
  mediaQueries,
  mediaQueriesLandscape,
} from '../styles/mediaQueries';

import { ButtonLink } from './Button';

interface PriceCardProps {
  plan: string;
  price: string;
  device: number;
  disabled: boolean;
}

const StyledPriceCard = styled.div`
  background-color: var(--color-dark--1);
  width: 25rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries(SCREEN_SIZE.Tablet)` padding: 4rem 5rem;`}
  ${mediaQueriesLandscape()` padding: 2rem 3rem;`}

  h2 {
    font-size: 3rem;
    padding: 2rem 0;

    ${mediaQueries(SCREEN_SIZE.Tablet)` font-size: 4rem;`}
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
