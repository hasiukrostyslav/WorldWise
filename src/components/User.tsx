import styled from 'styled-components';

import { useUser } from '../hooks/useUser';
import { useLogOut } from '../hooks/useLogOut';

import { Button } from './Button';

const StyledUser = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 2rem;
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
  const { userName } = useUser();
  const { logout } = useLogOut();

  return (
    <StyledUser>
      <img src="/user.png" alt="user" />
      <span>Welcome, {userName}</span>
      <Button onClick={() => logout()} size="extraSmall" $variation="dark">
        Logout
      </Button>
    </StyledUser>
  );
}

export default User;
