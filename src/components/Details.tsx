import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLongLeft } from 'react-icons/hi2';

import OuterLink from './OuterLink';
import { Button } from './Button';

interface DetailsProps {
  type: 'City' | 'Country';
  name: string;
}

const StyledDetails = styled.div`
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
  }

  h5 {
    font-size: 1.1rem;
    text-transform: uppercase;
    color: var(--color-light--1);
  }

  h4 {
    font-size: 2rem;
  }
`;

function Details({ type, name }: DetailsProps) {
  const navigate = useNavigate();

  return (
    <StyledDetails>
      <div className="box">
        <h5>{type} name</h5>
        <h4>
          <span>GB</span> {name}
        </h4>
      </div>
      <div className="box">
        <h5>
          {type === 'City'
            ? `You went to ${name} on`
            : 'List of visited cities'}
        </h5>
        {type === 'City' && <time>Wednesday, November 15, 2023</time>}
        {type === 'Country' && <p>London, Liverpool, Manchester</p>}
      </div>
      <div className="box">
        <h5>Learn more</h5>
        <OuterLink link={name} />
      </div>
      <Button $variation="outline" onClick={() => navigate(-1)}>
        <HiArrowLongLeft /> Back
      </Button>
    </StyledDetails>
  );
}

export default Details;
