import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCity } from '../hooks/useCity';
import { getFormatDate } from '../utils/helper';

import DetailsContainer from './DetailsContainer';
import Error from './Error';
import Spinner from './Spinner';

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
