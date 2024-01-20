import { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';
import type { CityInput, LoginInputs, SignUpInputs } from '../types';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

interface InputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  defaultValue?: string;
  disabled?: boolean;
}

const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.4rem;
  ${mediaQueries(SCREEN_SIZE.SmallLaptop)` font-size: 1.6rem;`}
  ${mediaQueries(SCREEN_SIZE.Laptop)` font-size: 1.8rem;`}

  input:disabled {
    cursor: not-allowed;
  }
`;

const Input = forwardRef<
  HTMLInputElement,
  InputProps &
    ReturnType<UseFormRegister<LoginInputs | SignUpInputs | CityInput>>
>(function Input(
  { onChange, onBlur, name, label, type, defaultValue, disabled },
  ref
) {
  return (
    <StyledInput>
      {label}
      <input
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </StyledInput>
  );
});

export default Input;
