import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCityByCoords } from './useCityByCoords';
import { CityInput } from '../types';

function useNewCityForm() {
  const { city, isPending, isError, error } = useCityByCoords();

  const {
    register,
    handleSubmit,
    setFocus,
    control,
    formState: { errors: inputError },
  } = useForm<CityInput>({
    values: {
      city: city?.cityName || '',
      date: null,
      note: null,
    },
  });

  useEffect(() => {
    setFocus('city');
  }, [setFocus]);

  return {
    register,
    handleSubmit,
    control,
    inputError,
    city,
    isPending,
    isError,
    error,
  };
}

export default useNewCityForm;
