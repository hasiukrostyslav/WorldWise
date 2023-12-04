import styled from 'styled-components';
import { TbCurrentLocation } from 'react-icons/tb';

interface LocationButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const StyledLOcationButton = styled.button`
  position: absolute;
  z-index: 999;
  bottom: 3rem;
  left: 1rem;
  border: none;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-light--2);
  transition: all 0.5s;

  &:hover {
    background-color: var(--color-light--3);
  }
  &:disabled {
    background-color: var(--color-light--3);
    cursor: not-allowed;
  }
`;

const LocationIcon = styled(TbCurrentLocation)`
  font-size: 2.5rem;
  outline: 'red';
`;

function LocationButton({ onClick, disabled }: LocationButtonProps) {
  return (
    <StyledLOcationButton disabled={disabled} onClick={onClick}>
      <LocationIcon />
    </StyledLOcationButton>
  );
}

export default LocationButton;
