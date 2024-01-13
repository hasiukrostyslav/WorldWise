import styled from 'styled-components';

import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

interface FormContainerProps {
  $grow?: 0 | 1;
  $shrink?: boolean;
}

const StyledFormContainer = styled.section<FormContainerProps>`
  flex-grow: ${(props) => props.$grow ?? 1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .input-box {
    position: relative;
    margin-bottom: 2.2rem;
    width: 100%;
    ${(props) =>
      props.$shrink
        ? `${mediaQueries(SCREEN_SIZE.SmallTablet)` width: 50%;`}`
        : `${mediaQueries(SCREEN_SIZE.SmallTablet)` width: 100%;`}`}

    ${mediaQueries(SCREEN_SIZE.Tablet)` width: 100%;`}
  }

  .flex-inputs {
    display: block;
    gap: 2rem;
    margin-bottom: 0.6rem;
    ${(props) =>
      props.$shrink
        ? `${mediaQueries(SCREEN_SIZE.SmallTablet)` display: flex;`}`
        : `${mediaQueries(SCREEN_SIZE.SmallTablet)` display: block;`}`}

    ${mediaQueries(SCREEN_SIZE.Tablet)` display: block;`}
  }

  .footer {
    display: flex;
    margin-top: 3rem;
    align-items: end;
    justify-content: space-between;
    gap: 5rem;
    width: 100%;

    ${(props) =>
      props.$shrink
        ? ` ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
      margin-top: 0;
      align-items: center;
      justify-content: space-around;
      width: 50%;
    `}`
        : ` ${mediaQueries(SCREEN_SIZE.SmallTablet)` 
      margin-top: 3rem;
      align-items: end;
      justify-content: space-between;
      width: 100%;
    `}`}

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

function FormContainer({ children, $grow, $shrink }: FormContainerProps) {
  return (
    <StyledFormContainer $shrink={$shrink} $grow={$grow}>
      {children}
    </StyledFormContainer>
  );
}

export default FormContainer;
