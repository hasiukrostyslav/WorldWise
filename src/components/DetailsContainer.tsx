import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';
import OuterLink from './OuterLink';
import { Button } from './Button';

interface DetailsContainerProps {
  name: string | undefined;
  type: 'city' | 'country';
  children: React.ReactNode;
}

const StyledDetailsContainer = styled.div`
  position: relative;
  padding: 2rem 3rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  `}
  ${mediaQueries(SCREEN_SIZE.Tablet)` 
    flex-direction: column;
    justify-content: space-between;
  `}

  align-items: start;
  gap: 1.4rem;
  background-color: var(--color-dark--2);
  border-radius: 0.8rem;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: flex-start;
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
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 1.6rem;
      ${mediaQueries(SCREEN_SIZE.Tablet)` font-size: 1.8rem;`}
      ${mediaQueries(SCREEN_SIZE.SmallLaptop)` font-size: 2rem;`}
    }

    img {
      width: 4rem;
    }
  }
  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    .half {
      flex-basis: 50%;
    }
  }
  .notes {
    font-size: 1.4rem;
  }

  .border-box {
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
      </div>
    </StyledDetailsContainer>
  );
}

export default DetailsContainer;
