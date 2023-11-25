import { useCity } from '../hooks/useCity';
import { getFormatDate } from '../utils/helper';

import DetailsContainer from './DetailsContainer';
import Error from './Error';
import Spinner from './Spinner';

function City() {
  const { city, isLoading, isError } = useCity();

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <DetailsContainer name={city?.name}>
      <div className="box">
        <h4>City name</h4>
        <p>
          <img src={city?.countryFlag} alt="Country flag" />
          <span>{city?.name}</span>
        </p>
      </div>
      <div className="box">
        <h4>{`You went to ${city?.name} on`}</h4>
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
