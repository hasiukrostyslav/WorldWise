import styled from 'styled-components';

interface TextAreaProps {
  city: string;
}

const StyledTextArea = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
  font-size: 1.8rem;
`;

function TextArea({ city }: TextAreaProps) {
  return (
    <StyledTextArea>
      {`Notes about your trip to ${city}`}
      <textarea name="Description" />
    </StyledTextArea>
  );
}

export default TextArea;
