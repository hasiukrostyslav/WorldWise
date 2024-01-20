import { useEffect } from 'react';
import { useUser } from '../hooks/useUser';
import { useLayer } from '../hooks/useLayer';
import { StyledHome } from '../styles/components/StyledHomePage';
import { ButtonLink } from '../components/Button';

function Home() {
  const { isAuthenticated } = useUser();
  const { exitFullScreen, isFullScreen } = useLayer();

  useEffect(() => {
    if (isFullScreen) exitFullScreen();
  }, [isFullScreen, exitFullScreen]);

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
      <ButtonLink to={isAuthenticated ? 'app' : 'login'} size="large">
        Start tracking now
      </ButtonLink>
    </StyledHome>
  );
}

export default Home;
