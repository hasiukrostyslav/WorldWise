import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { useUrlPosition } from '../hooks/useUrlPosition';
import { useGeolocation } from '../hooks/useGeolocation';
import { useLayer } from '../hooks/useLayer';
import { useCities } from '../hooks/useCities';
import { MAP_CENTER, MAP_LAYERS } from '../utils/constant';

import { ChangeMapCenter, DetectMapClick, MapResize } from './MapTools';
import { LayerButton, LocationButton, ScreenButton } from './MapButton';
import LayersOption from './LayersOption';
import User from './User';

interface MapProps {
  $size: boolean | undefined;
}

const size = {
  large: css`
    width: 100%;
  `,
  medium: css`
    width: calc(100% - 55rem);
  `,
};

const StyledMap = styled.section<MapProps>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: calc(100% - 55rem);
  ${(props) => (props.$size ? size.large : size.medium)}
  transition: all 1s;
`;

const Tools = styled.div`
  position: absolute;
  z-index: 999;
  width: 16rem;
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
  const [lat, lng] = useUrlPosition();
  const { cities } = useCities();

  const {
    isLoading: isGeolocationLoading,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const {
    toggleLayerPanel,
    isOpenLayerPanel,
    activeLayer,
    changeLayer,
    isFullScreen,
    toggleFullScreen,
  } = useLayer();

  useEffect(() => {
    if (lat && lng) setMapPosition([+lat, +lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([
        geolocationPosition.latitude,
        geolocationPosition.longitude,
      ]);
  }, [geolocationPosition]);

  return (
    <StyledMap $size={isFullScreen}>
      <User />
      <Tools>
        <LocationButton
          onClick={getPosition}
          disabled={isGeolocationLoading}
          $isRound={true}
        />
        <ScreenButton $isFullScreen={isFullScreen} onClick={toggleFullScreen} />
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
        minZoom={3}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={MAP_LAYERS[activeLayer]}
        />
        {cities?.map((city) => {
          const { latitude, longitude } = city;
          return (
            <Marker key={city.id} position={[latitude, longitude]}>
              <Popup>
                <img src={city.countryFlag} />
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}

        <ChangeMapCenter position={mapPosition} />
        <DetectMapClick />
        <MapResize />
      </MapContainer>
    </StyledMap>
  );
}

export default Map;
