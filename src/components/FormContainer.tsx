import styled from 'styled-components';

import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

const StyledFormContainer = styled.section<{ $grow?: 0 | 1 }>`
  flex-grow: ${(props) => props.$grow ?? 1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .input-box {
    position: relative;
    margin-bottom: 2.2rem;
    width: 50%;
    ${mediaQueries(SCREEN_SIZE.Tablet)` 
    width: 100%;
    `}
  }

  .flex-inputs {
    display: flex;
    gap: 2rem;
    margin-bottom: 0.6rem;
    ${mediaQueries(SCREEN_SIZE.Tablet)` display: block;`}
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;
    width: 50%;
    ${mediaQueries(SCREEN_SIZE.Tablet)` 
      margin-top: 3rem;
      align-items: end;
      justify-content: space-between;
      width: 100%;
    `}
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
