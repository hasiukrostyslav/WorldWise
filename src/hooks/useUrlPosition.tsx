import { useSearchParams } from 'react-router-dom';

export function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams();

  const coords = {
    lat: searchParams.get('lat'),
    lng: searchParams.get('lng'),
  };

  return [coords.lat, coords.lng];
}
