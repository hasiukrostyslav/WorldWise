import styled from 'styled-components';
import Button from '../components/Button';

const StyledHome = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85%;
  margin: 0 6rem;
  gap: 3rem;
`;

function Home() {
  return (
    <StyledHome>
      <h1>
        You travel the world. <br />
        WorldWise keeps track of your adventures.
      </h1>
      <h3>
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </h3>
      <Button to="login" size="large">
        Start tracking now
      </Button>
    </StyledHome>
  );
}

export default Home;
