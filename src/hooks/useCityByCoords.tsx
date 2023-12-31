import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCityByCoords } from '../services/apiCities';

export function useCityByCoords() {
  const [searchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const {
    data: city,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['newCity', lat],
    queryFn: () => getCityByCoords(lat, lng),
  });
  return { city, isPending, isError, error };
}
