import styled from 'styled-components';

import { Button } from './Button';

const StyledUser = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1rem 1.6rem;
  width: fit-content;
  background-color: var(--color-dark--1);
  border-radius: 1rem;
  z-index: 999;

  img {
    width: 4rem;
  }

  span {
    font-weight: 500;
    font-size: 1.6rem;
  }
`;

function User() {
  return (
    <StyledUser>
      <img src="/user.png" alt="user" />
      <span>Welcome, Jack</span>
      <Button size="extraSmall" $variation="dark">
        Logout
      </Button>
    </StyledUser>
  );
}

export default User;