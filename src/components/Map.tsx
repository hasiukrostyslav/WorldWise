import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useUrlPosition } from '../hooks/useUrlPosition';
import { useGeolocation } from '../hooks/useGeolocation';
import { useLayer } from '../hooks/useLayer';
import { useCities } from '../hooks/useCities';
import { useAppMenu } from '../hooks/useAppMenu';
import { useMatchMedia } from '../hooks/useMatchMedia';
import { MAP_CENTER, MAP_LAYERS } from '../utils/constant';
import { SCREEN_SIZE, mediaQueries } from '../styles/mediaQueries';
import { ChangeMapCenter, DetectMapClick, MapResize } from './MapTools';
import { LayerButton, LocationButton, ScreenButton } from './MapButton';
import LayersOption from './LayersOption';
import User from './User';
import MiniLogo from './MiniLogo';
import MenuButton from './MenuButton';

interface MapProps {
  $size: boolean | undefined;
}

const size = {
  large: css`
    height: 100%;
    ${mediaQueries(SCREEN_SIZE.SmallTablet)`  height: 100%`}
    ${mediaQueries(SCREEN_SIZE.Tablet)`  width: 100%;`}
  `,
  medium: css`
    ${mediaQueries(SCREEN_SIZE.Tablet)` width: calc(100% - 45rem);`}
    ${mediaQueries(SCREEN_SIZE.SmallLaptop)` width: calc(100% - 50rem);`}
    ${mediaQueries(SCREEN_SIZE.Laptop)` width: calc(100% - 55rem);`}
  `,
};

const StyledMap = styled.section<MapProps>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 1s;
  ${mediaQueries(SCREEN_SIZE.SmallTablet)` height: calc(100% - 30rem)`}
  ${mediaQueries(SCREEN_SIZE.Tablet)` height: 100%;`}
  ${(props) => (props.$size ? size.large : size.medium)}
`;

const Tools = styled.div`
  position: absolute;
  z-index: 999;
  height: 4.2rem;
  bottom: 2rem;
  right: 1.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: end;
`;

function Map() {
  const { matchMedia } = useMatchMedia({ minWidth: '540px' });
  const { isOpenMenu, toggleMenu } = useAppMenu();
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
      {isFullScreen && <MiniLogo isShow={isFullScreen} />}
      <User />
      {!matchMedia && (
        <MenuButton
          $position="map"
          onClick={toggleMenu}
          // isOpen={isOpenMenu}
          $isOpen={isOpenMenu}
        />
      )}
      <Tools>
        <LocationButton
          onClick={getPosition}
          disabled={isGeolocationLoading}
          $isRound={true}
        />
        {matchMedia && (
          <ScreenButton
            $isFullScreen={isFullScreen}
            onClick={toggleFullScreen}
          />
        )}

        <LayersOption
          changeLayer={changeLayer}
          activeLayer={activeLayer}
          isOpenLayerPanel={isOpenLayerPanel}
        />

        <LayerButton
          $isTransparent={isOpenLayerPanel}
          onClick={toggleLayerPanel}
        />
      </Tools>

      <MapContainer
        style={{ height: '100%' }}
        center={mapPosition}
        zoom={5}
        scrollWheelZoom={true}
        minZoom={3}
        maxBoundsViscosity={0.8}
        maxBounds={[
          [83, -185],
          [-84, 230],
        ]}
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
