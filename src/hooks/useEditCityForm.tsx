import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { useCity } from './useCity';
import { CityInput } from '../types';

function useEditCityForm() {
  const { city, isLoading, isError } = useCity();
  const date = dayjs(city?.date);

  const {
    register,
    handleSubmit,
    setFocus,
    control,
    formState: { errors: inputError, isDirty: isTouchedField },
  } = useForm<CityInput>({
    values: {
      city: city?.cityName || '',
      date: date || null,
      note: city?.description || null,
    },
  });

  useEffect(() => {
    setFocus('city');
  }, [setFocus]);

  return {
    register,
    handleSubmit,
    control,
    isTouchedField,
    inputError,
    city,
    date,
    isLoading,
    isError,
  };
}

export default useEditCityForm;
