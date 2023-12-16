import { forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import type { CityInput } from '../types';

interface TextAreaProps {
  city: string | undefined;
}

const StyledTextArea = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
  font-size: 1.8rem;
`;

const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & ReturnType<UseFormRegister<CityInput>>
>(function TextArea({ onChange, onBlur, name, city }, ref) {
  return (
    <StyledTextArea>
      {`Notes about your trip to ${city}`}
      <textarea name={name} onBlur={onBlur} onChange={onChange} ref={ref} />
    </StyledTextArea>
  );
});

export default TextArea;
