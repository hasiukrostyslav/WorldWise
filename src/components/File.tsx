import styled from 'styled-components';
import { BsFileEarmark } from 'react-icons/bs';
import DeleteButton from './DeleteButton';

const StyledFile = styled.div`
  position: absolute;
  top: 5.2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  font-size: 1.4rem;
  background-color: var(--color-dark--1);
`;
const Icon = styled(BsFileEarmark)``;

interface FileProps {
  fileName: string | undefined;
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function File({ fileName, disabled, onClick }: FileProps) {
  return (
    <StyledFile>
      <Icon />
      {fileName && fileName?.length > 20 ? fileName.slice(0, 20) : fileName}

      <DeleteButton
        $color="light"
        $size="small"
        disabled={disabled}
        onClick={onClick}
      />
    </StyledFile>
  );
}

export default File;
