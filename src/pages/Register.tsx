import styled from 'styled-components';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const StyledRegister = styled.section`
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

function Register() {
  const navigate = useNavigate();

  return (
    <StyledRegister>
      <Form>
        <Input label="Name" type="text" name="name" />
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Input
          label="Confirm Password"
          type="password"
          name="confirm-password"
        />
        <div>
          <Button $variation="secondary">Register</Button>
          <Button
            type="button"
            $variation="danger"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </StyledRegister>
  );
}

export default Register;
