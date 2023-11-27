import styled from 'styled-components';

const StyledFormContainer = styled.section<{ $grow?: 0 | 1 }>`
  flex-grow: ${(props) => props.$grow ?? 1};
  display: flex;
  align-items: center;
  justify-content: center;

  .input-box {
    position: relative;
    margin-bottom: 2.2rem;
  }

  .footer {
    margin-top: 3rem;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
`;

interface FormContainerProps {
  children: React.ReactNode;
  $grow?: 0 | 1;
}

function FormContainer({ children, $grow }: FormContainerProps) {
  return <StyledFormContainer $grow={$grow}>{children}</StyledFormContainer>;
}

export default FormContainer;
