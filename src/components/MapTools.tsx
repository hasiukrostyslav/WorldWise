import { useMap, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

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
  useMapEvents({
    click(e) {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });

  return null;
}
