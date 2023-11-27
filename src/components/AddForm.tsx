import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { HiArrowLongLeft } from 'react-icons/hi2';

import type { CityInput } from '../types';

import FormContainer from './FormContainer';
import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import InputError from './InputError';
import { Button } from './Button';

function AddForm() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<CityInput>();
  const navigate = useNavigate();

  useEffect(() => {
    setFocus('city');
  }, [setFocus]);

  const onSubmit: SubmitHandler<CityInput> = (data) => {
    console.log(data);
    reset();
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
          <Input
            label="When did you go to London"
            type="text"
            {...register('date', {
              required: 'Please select the date',
            })}
          />
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
