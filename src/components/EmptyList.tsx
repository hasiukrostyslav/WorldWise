import styled from 'styled-components';

const StyledEmptyList = styled.p`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

function EmptyList() {
  return (
    <StyledEmptyList>
      😀 Add your first city by clicking on the map
    </StyledEmptyList>
  );
}

export default EmptyList;
