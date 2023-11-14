import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 1.2rem;
  color: var(--color-light--1);
`;

function Footer() {
  const [date, setDate] = useState<null | number>(null);

  useEffect(() => {
    const now = new Date();
    setDate(now.getFullYear());
  }, []);

  return <StyledFooter>&copy; Copyright {date} by WorldWise Inc.</StyledFooter>;
}

export default Footer;
