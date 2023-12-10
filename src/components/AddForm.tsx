import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from 'styled-components';

import type { CityInput } from '../types';
import { SX_PROPS } from '../utils/constant';

import FormContainer from './FormContainer';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import InputError from './InputError';
import { Button } from './Button';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.8rem;
`;

function AddForm() {
  const {
    register,
    handleSubmit,
    setFocus,
    control,
    formState: { errors },
  } = useForm<CityInput>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setFocus('city');
  }, [setFocus]);

  useEffect(() => {
    if (!searchParams.get('lat') && !searchParams.get('lng')) navigate('/app');
  }, [searchParams, navigate]);

  const onSubmit: SubmitHandler<CityInput> = (data) => {
    console.log(data);
    navigate('/app');
  };

  return (
    <FormContainer $grow={0}>
      <Form $variation="secondary" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <Input
            label="City name"
            type="text"
            {...register('city', { required: 'Please enter city name' })}
          />
          {errors.city && <InputError message={errors.city.message} />}
        </div>

        <div className="input-box">
          <Label>
            {`When did you go to London`}
            <Controller
              name="date"
              control={control}
              defaultValue=""
              render={({ field: { onChange, ref } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
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
          <TextArea city="London" {...register('note')} />
        </div>
        <div className="footer">
          <Button>Add</Button>
          <Button
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
