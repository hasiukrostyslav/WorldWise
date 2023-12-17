import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { getCountry } from '../services/apiCountries';
import { formatCountryNameFromURL } from '../utils/helper';

export function useCountry() {
  const { countryName } = useParams();
  const [searchParams] = useSearchParams();

  const formatCountryName = formatCountryNameFromURL(countryName);
  const countryCode = searchParams.get('code');

  const {
    data: country,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['country', formatCountryName],
    queryFn: () => getCountry(countryCode),
  });

  return { country, isLoading, isError };
}
