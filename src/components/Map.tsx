import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { useUrlPosition } from '../hooks/useUrlPosition';
import { useGeolocation } from '../hooks/useGeolocation';
import { useLayer } from '../hooks/useLayer';
import { MAP_CENTER, MAP_LAYERS } from '../utils/constant';

import { ChangeMapCenter, DetectMapClick } from './MapTools';
import { LayerButton, LocationButton } from './MapButton';
import LayersOption from './LayersOption';
import User from './User';

const StyledMap = styled.section`
  position: relative;
  flex-grow: 1;
`;
const Tools = styled.div`
  position: absolute;
  z-index: 999;
  width: 10rem;
  height: 4.2rem;
  bottom: 2rem;
  right: 1.5rem;
  display: flex;
  gap: 2rem;
  align-items: end;
`;

const LayersBox = styled.div`
  position: relative;
`;

function Map() {
  const [mapPosition, setMapPosition] = useState<[number, number]>(MAP_CENTER);
  const { toggleLayerPanel, isOpenLayerPanel, activeLayer, changeLayer } =
    useLayer();

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
      <Tools>
        <LocationButton
          onClick={getPosition}
          disabled={isGeolocationLoading}
          $isRound={true}
        />
        <LayersBox>
          <LayersOption
            changeLayer={changeLayer}
            activeLayer={activeLayer}
            isOpenLayerPanel={isOpenLayerPanel}
          />

          <LayerButton
            $isTransparent={isOpenLayerPanel}
            onClick={toggleLayerPanel}
          />
        </LayersBox>
      </Tools>

      <MapContainer
        style={{ height: '100%' }}
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={MAP_LAYERS[activeLayer]}
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
