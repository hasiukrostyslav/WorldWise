import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

import Button from './Button';

const StyledCountry = styled.div`
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

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-third);
  }
`;

function Country() {
  const navigate = useNavigate();

  return (
    <StyledCountry>
      <div className="box">
        <h5>Country name</h5>
        <h4>
          <span>GB</span> Great Britain
        </h4>
      </div>
      <div className="box">
        <h5>List of visited cities</h5>
        <p>London, Liverpool, Manchester</p>
      </div>
      <div className="box">
        <h5>Learn more</h5>
        <a target="_blank" href={`https://en.wikipedia.org/wiki/Great_Britain`}>
          Check out Great Britain on Wikipedia <HiArrowLongRight />
        </a>
      </div>
      <Button $variation="outline" onClick={() => navigate(-1)}>
        <HiArrowLongLeft /> Back
      </Button>
    </StyledCountry>
  );
}

export default Country;
