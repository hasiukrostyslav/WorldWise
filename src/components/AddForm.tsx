import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLongLeft } from 'react-icons/hi2';

import Form from './Form';
import Input from './Input';
import TextArea from './TextArea';
import { Button } from './Button';

const ButtonsBox = styled.div`
  margin-top: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function AddForm() {
  const navigate = useNavigate();

  return (
    <Form $variation="secondary">
      <Input label="City name" name="City name" type="text" />
      <Input label="When did you go to London" name="Date" type="text" />
      <TextArea city="London" />
      <ButtonsBox>
        <Button>Add</Button>
        <Button type="button" $variation="outline" onClick={() => navigate(-1)}>
          <HiArrowLongLeft /> Back
        </Button>
      </ButtonsBox>
    </Form>
  );
}

export default AddForm;