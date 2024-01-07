import styled from 'styled-components';
import { HiArrowLongRight } from 'react-icons/hi2';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';

interface OuterLinkProps {
  link: string | undefined;
}

const StyledOuterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.6rem;
  font-size: 1.2rem;

  ${mediaQueries(SCREEN_SIZE.Tablet)`  font-size: 1.4rem;`}

  &:link,
  &:visited {
    color: var(--color-third);
  }

  &:focus {
    outline: solid var(--color-third);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

function OuterLink({ link }: OuterLinkProps) {
  if (!link) return;

  const formattedLink =
    link.split(' ').length === 1 ? link : link.split(' ').join('_');

  return (
    <StyledOuterLink
      target="_blank"
      href={`https://en.wikipedia.org/wiki/${formattedLink}`}
    >
      More info
      <HiArrowLongRight />
    </StyledOuterLink>
  );
}

export default OuterLink;
