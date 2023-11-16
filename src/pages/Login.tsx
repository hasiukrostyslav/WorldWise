import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Form from '../components/Form';
import Input from '../components/Input';
import {Button} from '../components/Button';

const StyledLogin = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 3rem;
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
`;

function Login() {
  const navigate = useNavigate();

  return (
    <StyledLogin>
      <Form>
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <div>
          <Button>Login</Button>
          <Button
            type="button"
            $variation="danger"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </StyledLogin>
  );
}

export default Login;
