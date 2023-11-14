import styled from 'styled-components';

const StyledEmptyList = styled.p`
  font-size: 1.8rem;
  margin-top: 3rem;
`;

function EmptyList() {
  return (
    <StyledEmptyList>
      😀 Add your first city by clicking on the map
    </StyledEmptyList>
  );
}

export default EmptyList;
