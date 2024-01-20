import { useNavigate } from 'react-router-dom';
import {
  Controller,
  UseFormRegister,
  Control,
  FieldErrors,
} from 'react-hook-form';
import styled from 'styled-components';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { Dayjs } from 'dayjs';
import type { City, CityBase, CityInput } from '../types';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';
import MUIDatePicker from './MUIDatePicker';
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
  font-size: 1.4rem;
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` font-size: 1.6rem;`}
  ${mediaQueries(SCREEN_SIZE.Laptop)` font-size: 1.8rem;`}
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
    <FormContainer $grow={0} $shrink={true}>
      <Form $variation="secondary" onSubmit={onSubmit} $grow={true}>
        <div className="flex-inputs">
          <div className="input-box">
            <Input
              disabled={isSendingData}
              defaultValue={city?.cityName}
              label="City name"
              type="text"
              {...register('city', { required: 'Please enter city name' })}
            />
            {inputError.city && (
              <InputError message={inputError.city.message} />
            )}
          </div>

          <div className="input-box">
            <Label>
              {`When did you go to ${city?.cityName}`}
              <Controller
                name="date"
                control={control}
                render={({ field: { onChange, ref } }) => (
                  <MUIDatePicker
                    onAccept={onChange}
                    onChange={onChange}
                    disabled={isSendingData}
                    inputRef={ref}
                    defaultValue={date}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Please select the date',
                  },
                }}
              />
            </Label>
            {inputError.date && (
              <InputError message={inputError.date.message} />
            )}
          </div>
        </div>
        <div className="flex-inputs">
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
        </div>
      </Form>
    </FormContainer>
  );
}

export default FormCity;
