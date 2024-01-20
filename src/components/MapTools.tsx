import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMap, useMapEvents } from 'react-leaflet';
import { useLayer } from '../hooks/useLayer';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { useAppMenu } from '../hooks/useAppMenu';

interface ChangeMapCenterProps {
  position: [number, number];
}

export const ChangeMapCenter = memo(function ChangeMapCenter({
  position,
}: ChangeMapCenterProps) {
  const map = useMap();

  if (!position) return;
  map.setView(position);

  return null;
});

export function DetectMapClick() {
  const { matchMedia } = useMatchMedia({ minWidth: '540px' });
  const { exitFullScreen } = useLayer();
  const { openMenu } = useAppMenu();
  const navigate = useNavigate();

  useMapEvents({
    click(e) {
      exitFullScreen();
      navigate(`form/new?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      if (!matchMedia) openMenu();
    },
  });

  return null;
}

export function MapResize() {
  const map = useMap();

  setTimeout(function () {
    map.invalidateSize({ pan: false, animate: false });
  }, 400);

  return null;
}
