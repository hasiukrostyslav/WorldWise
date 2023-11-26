import { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import type { LoginInputs, SignUpInputs } from '../types';

interface InputProps {
  label: string;
  type: 'text' | 'email' | 'password';
}

const StyledInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.8rem;
`;

const Input = forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<LoginInputs | SignUpInputs>>
>(function Input({ onChange, onBlur, name, label, type }, ref) {
  return (
    <StyledInput>
      {label}
      <input
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
      />
    </StyledInput>
  );
});

export default Input;
