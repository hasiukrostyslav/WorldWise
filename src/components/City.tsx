import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LuClipboardEdit } from 'react-icons/lu';

import { useCity } from '../hooks/useCity';
import { getFormatDate } from '../utils/helper';

import DetailsContainer from './DetailsContainer';
import Error from './Error';
import Spinner from './Spinner';

const EditIcon = styled(LuClipboardEdit)`
  width: 2.5rem;
  height: 2.5rem;
`;

const EditButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.2rem;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: var(--color-light--1);
  transition: all 0.5s;

  &:hover {
    color: var(--color-light--2);
  }

  &:disabled {
    background-color: var(--color-light--1);
    cursor: not-allowed;
  }
  &:focus {
    outline: 4px solid var(--color-primary--0);
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

function City() {
  const navigate = useNavigate();
  const { city, isLoading, isError } = useCity();

  useEffect(() => {
    if (!city) return;

    navigate(`?lat=${city?.latitude}&lng=${city?.longitude}`);
  }, [city, navigate]);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <DetailsContainer type="city" name={city?.cityName}>
      <EditButton onClick={() => navigate(`/app/form/edit/${city?.id}`)}>
        <EditIcon />
      </EditButton>
      <div className="box">
        <h4>City name</h4>
        <p>
          <img src={city?.countryFlag} alt="Country flag" />
          <span>{city?.cityName}</span>
        </p>
      </div>
      <div className="box">
        <h4>{`You went to ${city?.cityName} on`}</h4>
        <time>{getFormatDate(city?.date, true)}</time>
      </div>
      {city?.description && (
        <div className="box">
          <h4>Your notes</h4>
          <p className="notes">{city?.description}</p>
        </div>
      )}
    </DetailsContainer>
  );
}

export default City;
