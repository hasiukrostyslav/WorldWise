import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import User from './User';

const StyledMap = styled.section`
  position: relative;
  flex-grow: 1;
`;

function Map() {
  return (
    <StyledMap>
      <User />
      <MapContainer
        style={{ height: '100%' }}
        center={[51.505, -0.09]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </StyledMap>
  );
}

export default Map;
