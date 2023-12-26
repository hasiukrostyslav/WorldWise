import { useNavigate } from 'react-router-dom';
import {
  Controller,
  UseFormRegister,
  Control,
  FieldErrors,
} from 'react-hook-form';
import styled from 'styled-components';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { Dayjs } from 'dayjs';

import { SX_PROPS } from '../utils/constant';
import type { City, CityBase, CityInput } from '../types';

import FormContainer from './FormContainer';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import InputError from './InputError';
import Spinner from './Spinner';
import Error from './Error';
import { Button } from './Button';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.8rem;
`;

interface FormCityProps {
  city: City | CityBase | undefined;
  isLoading: boolean;
  isError: boolean;
  error?: Error | null;
  date?: Dayjs;
  register: UseFormRegister<CityInput>;
  control: Control<CityInput>;
  inputError: FieldErrors<CityInput>;
  onSubmit: () => void;
  isSendingData: boolean;
  isTouchedField?: boolean;
}

function FormCity({
  city,
  isLoading,
  isError,
  error,
  date,
  register,
  control,
  inputError,
  onSubmit,
  isSendingData,
  isTouchedField,
}: FormCityProps) {
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (isError) return <Error message={error?.message} />;

  return (
    <FormContainer $grow={0}>
      <Form $variation="secondary" onSubmit={onSubmit}>
        <div className="input-box">
          <Input
            disabled={isSendingData}
            defaultValue={city?.cityName}
            label="City name"
            type="text"
            {...register('city', { required: 'Please enter city name' })}
          />
          {inputError.city && <InputError message={inputError.city.message} />}
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
                    defaultValue={date}
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
          {inputError.date && <InputError message={inputError.date.message} />}
        </div>

        <div className="input-box">
          <TextArea
            disabled={isSendingData}
            city={city?.cityName}
            {...register('note')}
          />
        </div>
        <div className="footer">
          <Button
            disabled={isSendingData}
            type="button"
            $variation="outline"
            onClick={() => navigate('/app')}
          >
            <HiArrowLongLeft /> Back
          </Button>
          {date ? (
            <Button disabled={isSendingData || !isTouchedField}>Save</Button>
          ) : (
            <Button disabled={isSendingData}>Add</Button>
          )}
        </div>
      </Form>
    </FormContainer>
  );
}

export default FormCity;
