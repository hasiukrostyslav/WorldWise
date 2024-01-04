import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMap, useMapEvents } from 'react-leaflet';

import { useLayer } from '../hooks/useLayer';

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
  const navigate = useNavigate();
  const { exitFullScreen } = useLayer();

  useMapEvents({
    click(e) {
      exitFullScreen();
      navigate(`form/new?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
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
