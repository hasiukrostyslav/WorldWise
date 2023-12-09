import { useState } from 'react';
import type { Coordinate } from '../types';

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [position, setPosition] = useState<null | Coordinate>(null);

  function getPosition() {
    if (!navigator.geolocation)
      setError('Your browser does not support geolocation');
    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { coords } = pos;
        setPosition({ latitude: coords.latitude, longitude: coords.longitude });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, error, getPosition, position };
}
