import styled from 'styled-components';
import { MdOutlineLayers, MdLayers, MdSatelliteAlt } from 'react-icons/md';

import { ICON_SIZE } from '../utils/constant';

import { LayerButton } from './MapButton';

const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

enum Layer {
  DEFAULT = 'default',
  DARK = 'dark',
  SATELLITE = 'satellite',
}

interface LayersOptionProps {
  activeLayer: string;
  changeLayer: (type: Layer) => void;
}

function LayersOption({ changeLayer, activeLayer }: LayersOptionProps) {
  return (
    <Select>
      <LayerButton
        $isActive={Layer.DEFAULT === activeLayer}
        key={Layer.DEFAULT}
        onClick={() => changeLayer(Layer.DEFAULT)}
      >
        <MdOutlineLayers style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isActive={Layer.DARK === activeLayer}
        key={Layer.DARK}
        onClick={() => changeLayer(Layer.DARK)}
      >
        <MdLayers style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isActive={Layer.SATELLITE === activeLayer}
        key={Layer.SATELLITE}
        onClick={() => changeLayer(Layer.SATELLITE)}
      >
        <MdSatelliteAlt style={ICON_SIZE} />
      </LayerButton>
    </Select>
  );
}
export default LayersOption;
