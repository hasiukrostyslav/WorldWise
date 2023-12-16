import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';

import { useCityByCoords } from '../hooks/useCityByCoords';
import type { CityInput } from '../types';
import { SX_PROPS } from '../utils/constant';

import FormContainer from './FormContainer';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import InputError from './InputError';
import Spinner from './Spinner';
import Error from './Error';
import { Button } from './Button';
import { useAddNewCity } from '../hooks/useAddNewCity';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.8rem;
`;

function AddForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { city, isPending, isError } = useCityByCoords();
  const { addCity, isPending: isSendingData } = useAddNewCity();

  const {
    register,
    handleSubmit,
    setFocus,
    control,
    formState: { errors },
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

  useEffect(() => {
    if (!searchParams.get('lat') && !searchParams.get('lng')) navigate('/app');
  }, [searchParams, navigate]);

  const onSubmit: SubmitHandler<CityInput> = (data) => {
    const cityData = {
      cityName: data.city,
      visitedDate: data.date?.format(),
      description: data.note,
      countryName: city?.countryName,
      countryFlag: city?.countryFlag,
      latitude: searchParams.get('lat'),
      longitude: searchParams.get('lng'),
    };

    addCity(cityData);
  };

  if (isPending) return <Spinner />;
  if (isError || !city?.cityName)
    return <Error message={!isError ? '⛔ You click on empty area!' : ''} />;

  return (
    <FormContainer $grow={0}>
      <Form $variation="secondary" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <Input
            disabled={isSendingData}
            label="City name"
            type="text"
            {...register('city', { required: 'Please enter city name' })}
          />
          {errors.city && <InputError message={errors.city.message} />}
        </div>

        <div className="input-box">
          <Label>
            {`When did you go to ${city?.cityName}`}
            <Controller
              name="date"
              control={control}
              render={({ field: { onChange, ref } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disabled={isSendingData}
                    sx={SX_PROPS}
                    onChange={onChange}
                    onAccept={onChange}
                    inputRef={ref}
                  />
                </LocalizationProvider>
              )}
              rules={{
                required: {
                  value: true,
                  message: 'Please select the date',
                },
              }}
            />
          </Label>
          {errors.date && <InputError message={errors.date.message} />}
        </div>

        <div className="input-box">
          <TextArea
            disabled={isSendingData}
            city={city?.cityName}
            {...register('note')}
          />
        </div>
        <div className="footer">
          <Button disabled={isSendingData}>Add</Button>
          <Button
            disabled={isSendingData}
            type="button"
            $variation="outline"
            onClick={() => navigate(-1)}
          >
            <HiArrowLongLeft /> Back
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}

export default AddForm;
