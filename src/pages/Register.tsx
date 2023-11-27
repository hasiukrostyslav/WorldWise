import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { SignUpInputs } from '../types';

import FormContainer from '../components/FormContainer';
import Form from '../components/Form';
import Input from '../components/Input';
import InputError from '../components/InputError';
import { Button } from '../components/Button';

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const navigate = useNavigate();

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    console.log(data);
    console.log(getValues());
    console.log(getValues('password'));
    reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <Input
            label="Name"
            type="text"
            {...register('name', { required: 'Please enter your name' })}
          />
          {errors.name && <InputError message={errors.name.message} />}
        </div>

        <div className="input-box">
          <Input
            label="Email"
            type="email"
            {...register('email', {
              required: 'Please enter your email',
              pattern: {
                value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                message: 'Please enter valid email!',
              },
            })}
          />
          {errors.email && <InputError message={errors.email.message} />}
        </div>

        <div className="input-box">
          <Input
            label="Password"
            type="password"
            {...register('password', {
              required: 'Please enter your password',
              minLength: 8,
            })}
          />
          {errors.password && (
            <InputError
              message={
                errors.password.type === 'minLength'
                  ? 'Password should contain at least 8 characters'
                  : errors.password.message
              }
            />
          )}
        </div>

        <div className="input-box">
          <Input
            label="Confirm Password"
            type="password"
            {...register('confirmPassword', {
              required: 'Please enter confirm password',
              minLength: 8,
              validate: (value) =>
                (getValues('password').length > 7 &&
                  getValues('password') === value) ||
                'Password and Confirm Password should be same',
            })}
          />
          {errors.confirmPassword && (
            <InputError
              message={
                errors.confirmPassword.type === 'minLength'
                  ? 'Password should contain at least 8 characters'
                  : errors.confirmPassword.message
              }
            />
          )}
        </div>

        <div className="footer">
          <Button $variation="secondary">Register</Button>
          <Button
            type="button"
            $variation="danger"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}

export default Register;
