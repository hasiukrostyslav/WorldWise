import styled from 'styled-components';

import Logo from './Logo';
import ToggleLinks from './ToggleLinks';
import Footer from './Footer';
// import EmptyList from './EmptyList';

interface SidebarProps {
  children: React.ReactNode;
}

const StyledSidebar = styled.aside`
  flex-basis: 56rem;
  padding: 3rem 5rem;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark--1);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Sidebar({ children }: SidebarProps) {
  return (
    <StyledSidebar>
      <div className="container">
        <Logo />
        <ToggleLinks />
        {/* <EmptyList /> */}
        {children}
      </div>
      <Footer />
    </StyledSidebar>
  );
}

export default Sidebar;
