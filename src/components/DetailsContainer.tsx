import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLongLeft } from 'react-icons/hi2';

import OuterLink from './OuterLink';
import { Button } from './Button';

interface DetailsContainerProps {
  name: string | undefined;
  type: 'city' | 'country';
  children: React.ReactNode;
}

const StyledDetailsContainer = styled.div`
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.4rem;
  background-color: var(--color-dark--2);
  border-radius: 0.8rem;

  .box {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }

  h4 {
    font-size: 1.1rem;
    text-transform: uppercase;
    color: var(--color-light--1);
  }

  span {
    font-size: 1.4rem;
  }

  p {
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: inherit;
    }

    img {
      width: 4rem;
    }
  }
  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    .half {
      flex-basis: 50%;
    }
  }
  .notes {
    font-size: 1.4rem;
  }

  .border-box {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    p {
      display: flex;
      img {
        width: 2rem;
      }
      span {
        font-size: 1.2rem;
      }
    }
  }
`;

function DetailsContainer({ name, children, type }: DetailsContainerProps) {
  const navigate = useNavigate();
  return (
    <StyledDetailsContainer>
      {children}
      <div className="box">
        <h4>Learn more</h4>
        <OuterLink link={name} />
      </div>
      <Button
        $variation="outline"
        onClick={() => navigate(type === 'city' ? '/app' : '/app/countries')}
      >
        <HiArrowLongLeft /> Back
      </Button>
    </StyledDetailsContainer>
  );
}

export default DetailsContainer;
