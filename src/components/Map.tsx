import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { useUrlPosition } from '../hooks/useUrlPosition';
import { useGeolocation } from '../hooks/useGeolocation';
import { MAP_CENTER } from '../utils/constant';

import { ChangeMapCenter, DetectMapClick } from './MapTools';
import LocationButton from './LocationButton';
import User from './User';

const StyledMap = styled.section`
  position: relative;
  flex-grow: 1;
`;

function Map() {
  const [mapPosition, setMapPosition] = useState<[number, number]>(MAP_CENTER);

  const [lat, lng] = useUrlPosition();

  const {
    isLoading: isGeolocationLoading,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (lat && lng) setMapPosition([+lat, +lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <StyledMap>
      <User />
      <LocationButton onClick={getPosition} disabled={isGeolocationLoading} />
      <MapContainer
        style={{ height: '100%' }}
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <ChangeMapCenter position={mapPosition} />
        <DetectMapClick />
      </MapContainer>
    </StyledMap>
  );
}

export default Map;
