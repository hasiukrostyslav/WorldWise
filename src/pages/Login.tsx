import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../hooks/useLogin';
import type { LoginInputs } from '../types';

import FormContainer from '../components/FormContainer';
import Form from '../components/Form';
import Input from '../components/Input';
import InputError from '../components/InputError';
import { Button } from '../components/Button';

function Login() {
  const { login, isPending } = useLogin();
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
    login(data);
    reset();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <Input
            disabled={isPending}
            label="Email"
            type="email"
            defaultValue="rostyslav@mail.com"
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
            disabled={isPending}
            label="Password"
            type="password"
            defaultValue="12qw34as"
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
          <Button disabled={isPending}>Login</Button>
          <Button
            disabled={isPending}
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
