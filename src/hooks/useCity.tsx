import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCity } from '../services/apiCities';

export function useCity() {
  const { id } = useParams();

  const {
    data: city,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['cities', id], queryFn: () => getCity(id) });

  return { city, isLoading, isError };
}
