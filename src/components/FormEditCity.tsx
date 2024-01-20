import { Suspense, lazy } from 'react';
import { SubmitHandler } from 'react-hook-form';
import useEditCityForm from '../hooks/useEditCityForm';
import useEditCity from '../hooks/useEditCity';
import type { CityInput } from '../types';
import Spinner from './Spinner';

const FormCity = lazy(() => import('./FormCity'));

function FormEditCity() {
  const { editCity, isPending: isSendingData } = useEditCity();
  const {
    register,
    handleSubmit,
    control,
    isTouchedField,
    inputError,
    city,
    date,
    isLoading,
    isError,
  } = useEditCityForm();

  const onSubmit: SubmitHandler<CityInput> = (data) => {
    const cityData = {
      id: city?.id,
      cityName: data.city,
      visitedDate: data.date?.format(),
      description: data.note,
    };

    editCity(cityData);
  };

  return (
    <Suspense fallback={<Spinner />}>
      <FormCity
        city={city}
        isLoading={isLoading}
        isError={isError}
        date={date}
        register={register}
        control={control}
        inputError={inputError}
        onSubmit={handleSubmit(onSubmit)}
        isSendingData={isSendingData}
        isTouchedField={isTouchedField}
      />
    </Suspense>
  );
}

export default FormEditCity;
