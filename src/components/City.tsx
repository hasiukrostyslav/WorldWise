import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLongLeft } from 'react-icons/hi2';

import Button from './Button';
import OuterLink from './OuterLink';

const StyledCity = styled.div`
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

function City() {
  const navigate = useNavigate();

  return (
    <StyledCity>
      <div className="box">
        <h5>City name</h5>
        <h4>
          <span>GB</span> London
        </h4>
      </div>
      <div className="box">
        <h5>You went to London on</h5>
        <time>Wednesday, November 15, 2023</time>
      </div>
      <div className="box">
        <h5>Learn more</h5>
        <OuterLink link="London" />
      </div>
      <Button $variation="outline" onClick={() => navigate(-1)}>
        <HiArrowLongLeft /> Back
      </Button>
    </StyledCity>
  );
}

export default City;
