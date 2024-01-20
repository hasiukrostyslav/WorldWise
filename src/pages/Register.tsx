import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../hooks/useSignUp';
import { EMAIL_REGEX } from '../utils/constant';
import type { SignUpInputs } from '../types';
import FormContainer from '../components/FormContainer';
import Form from '../components/Form';
import Input from '../components/Input';
import InputError from '../components/InputError';
import { Button } from '../components/Button';

function Register() {
  const { signUp, isPending } = useSignUp();
  const {
    register,
    handleSubmit,
    setFocus,
    getValues,
    formState: { errors },
  } = useForm<SignUpInputs>();
  const navigate = useNavigate();

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    signUp(data);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <Input
            disabled={isPending}
            label="Name"
            type="text"
            {...register('name', { required: 'Please enter your name' })}
          />
          {errors.name && <InputError message={errors.name.message} />}
        </div>

        <div className="input-box">
          <Input
            disabled={isPending}
            label="Email"
            type="email"
            {...register('email', {
              required: 'Please enter your email',
              pattern: {
                value: EMAIL_REGEX,
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
            disabled={isPending}
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
          <Button
            disabled={isPending}
            type="button"
            $variation="danger"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
          <Button disabled={isPending} $variation="secondary">
            Register
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}

export default Register;
