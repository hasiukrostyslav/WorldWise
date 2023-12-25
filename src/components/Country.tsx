import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCountry } from '../hooks/useCountry';

import DetailsContainer from './DetailsContainer';
import Error from './Error';
import Spinner from './Spinner';

function Country() {
  const navigate = useNavigate();
  const { country, isLoading, isError } = useCountry();

  useEffect(() => {
    if (!country) return;

    const { latitude, longitude } = country.coordinate;

    navigate(`?code=${country.countryCode}&lat=${latitude}&lng=${longitude}`);
  }, [navigate, country]);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <DetailsContainer type="country" name={country?.countryName}>
      <div className="box">
        <h4>Country name</h4>
        <p>
          <img src={country?.countryFlag} alt="flag" />
          <span>{country?.countryName}</span>
        </p>
      </div>

      <div className="flex">
        <div className="box half">
          <h4>Capital</h4>
          <span>{country?.capital}</span>
        </div>
        <div className="box half">
          <h4>Region</h4>
          <span>{country?.region}</span>
        </div>
      </div>
      {country?.borders.length !== 0 && (
        <div className="box">
          <h4>Borders with</h4>
          <div className="border-box">
            {country?.borders.map((border) => (
              <p key={border.countryName} className="border">
                <img
                  src={border.countryFlag}
                  alt={`${border.countryName} flag`}
                />
                <span>{border.countryName}</span>
              </p>
            ))}
          </div>
        </div>
      )}
      <div className="box">
        <h4>Visited cities</h4>
        <div>
          {country?.visitedCities.map((city, i) => (
            <span key={city.cityName}>
              {i + 1}. {city.cityName}{' '}
            </span>
          ))}
        </div>
      </div>
    </DetailsContainer>
  );
}

export default Country;
