import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useDeleteCity } from '../hooks/useDeleteCity';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { getFormatDate, getShortDate } from '../utils/helper';
import DeleteButton from './DeleteButton';

const StyledLink = styled(NavLink)`
  background-color: var(--color-dark--2);
  border: 3px solid var(--color-dark--2);
  border-left: 6px solid var(--color-primary--0);
  border-radius: 0.7rem;
  outline: none;
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2.4rem;
  color: var(--color-light--2);

  &:focus {
    border: 3px solid var(--color-primary--0);
    border-left: 6px solid var(--color-primary--0);
  }

  &:focus:not(:focus-visible) {
    border: 3px solid var(--color-dark--2);
    border-left: 6px solid var(--color-primary--0);
  }

  img {
    width: 3rem;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 1.2rem;
    margin-right: auto;
    white-space: nowrap;
  }

  time {
    font-size: 1.2rem;
    font-weight: 400;
    margin-right: 1.6rem;
  }
`;

type CityItemProps = {
  id: number;
  name: string;
  imgSrc: string;
  date: string;
};

function CityItem({ id, name, imgSrc, date }: CityItemProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const { matchMedia: matchMediaSmLaptop } = useMatchMedia({
    minWidth: '1024px',
  });
  const { matchMedia: matchMediaLaptop } = useMatchMedia({
    minWidth: '1280px',
  });

  const { deleteCity, isPending, isError } = useDeleteCity();
  const longDate = getFormatDate(date);
  const shortDate = getShortDate(date);

  useEffect(() => {
    if (isError) ref.current?.classList.remove('disabled');
  }, [isError]);

  function handleClickDelete(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    ref.current?.classList.add('disabled');
    deleteCity(id);
  }

  return (
    <li>
      <StyledLink ref={ref} to={`${id}`}>
        <img src={imgSrc} alt="Country flags" />
        <h4>{name}</h4>
        {matchMediaSmLaptop && !matchMediaLaptop && <time>{shortDate}</time>}
        {matchMediaLaptop && <time>{longDate}</time>}

        <DeleteButton
          onClick={handleClickDelete}
          disabled={isPending}
          $color="dark"
        />
      </StyledLink>
    </li>
  );
}

export default CityItem;
