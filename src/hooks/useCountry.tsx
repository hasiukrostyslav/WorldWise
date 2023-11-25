import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCountry } from '../services/apiCountries';
import { formatCountryNameFromURL } from '../utils/helper';

export function useCountry() {
  const { countryName } = useParams();
  const formatCountryName = formatCountryNameFromURL(countryName);

  const {
    data: country,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['country', formatCountryName],
    queryFn: () => getCountry(formatCountryName),
  });

  return { country, isLoading, isError };
}
