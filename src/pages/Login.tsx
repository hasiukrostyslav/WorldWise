import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import type { LoginInputs } from '../types';

import FormContainer from '../components/FormContainer';
import Form from '../components/Form';
import Input from '../components/Input';
import InputError from '../components/InputError';
import { Button } from '../components/Button';

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<LoginInputs>();
  const navigate = useNavigate();

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="footer">
          <Button>Login</Button>
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

export default Login;
