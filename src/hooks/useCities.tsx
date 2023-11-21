import { useQuery } from '@tanstack/react-query';
import { getCities } from '../services/apiCities';

function useCities() {
  const {
    data: cities,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['cities'], queryFn: getCities });

  return { cities, isLoading, isError };
}

export default useCities;
