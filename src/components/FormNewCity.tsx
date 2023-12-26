import { useEffect, lazy, Suspense } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';

import useNewCityForm from '../hooks/useNewCityForm';
import { useAddNewCity } from '../hooks/useAddNewCity';
import { CityInput } from '../types';

import Spinner from './Spinner';

const FormCity = lazy(() => import('./FormCity'));

function FormNewCity() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addCity, isPending: isSendingData } = useAddNewCity();
  const {
    register,
    handleSubmit,
    control,
    inputError,
    city,
    isPending,
    isError,
    error,
  } = useNewCityForm();

  useEffect(() => {
    if (!searchParams.get('lat') && !searchParams.get('lng')) navigate('/app');
  }, [searchParams, navigate]);

  const onSubmit: SubmitHandler<CityInput> = (data) => {
    const cityData = {
      cityName: data.city,
      visitedDate: data.date?.format(),
      description: data.note,
      countryName: city?.countryName,
      countryCode: city?.countryCode,
      countryFlag: city?.countryFlag,
      latitude: searchParams.get('lat'),
      longitude: searchParams.get('lng'),
    };

    addCity(cityData);
  };

  return (
    <Suspense fallback={<Spinner />}>
      <FormCity
        city={city}
        isLoading={isPending}
        isError={isError}
        error={error}
        register={register}
        control={control}
        inputError={inputError}
        onSubmit={handleSubmit(onSubmit)}
        isSendingData={isSendingData}
      />
    </Suspense>
  );
}

export default FormNewCity;
