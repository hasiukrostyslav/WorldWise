import styled from 'styled-components';
import { LiaCloudUploadAltSolid } from 'react-icons/lia';

const Label = styled.label`
  padding: 2rem 4rem;
  border: 2px dotted var(--color-light--2);
  border-radius: 8px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all.5s;
  cursor: pointer;

  input {
    display: none;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  span {
    background-color: var(--color-dark--2);
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 8px;
    transition: all 0.5s;

    &:hover {
      background-color: var(--color-dark--1);
      color: var(--color-light--1);
    }
  }
`;

const Icon = styled(LiaCloudUploadAltSolid)`
  width: 6rem;
  height: 6rem;
  color: var(--color-light--2);
`;

function FileInput() {
  return (
    <Label>
      <input type="file" />
      <Icon />
      <p>
        Drag&Drop files here
        <br />
        or
      </p>
      <span>Browse File</span>
    </Label>
  );
}

export default FileInput;
