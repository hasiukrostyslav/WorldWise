import styled from 'styled-components';
import { MdSatelliteAlt } from 'react-icons/md';
import { BsLayers, BsLayersFill, BsLayersHalf } from 'react-icons/bs';
import { ICON_SIZE } from '../utils/constant';
import { LayerButton } from './MapButton';

enum Layer {
  DEFAULT = 'default',
  STREET = 'street',
  DARK = 'dark',
  SATELLITE = 'satellite',
}

interface LayersOptionProps {
  activeLayer: string;
  isOpenLayerPanel: boolean;
  changeLayer: (type: Layer) => void;
}

const LayersBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

function LayersOption({
  changeLayer,
  activeLayer,
  isOpenLayerPanel,
}: LayersOptionProps) {
  return (
    <LayersBox>
      <LayerButton
        $isAbsolute={true}
        $isActive={Layer.DEFAULT === activeLayer}
        $translateY={isOpenLayerPanel ? 440 : 0}
        onClick={() => changeLayer(Layer.DEFAULT)}
      >
        <BsLayers style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isAbsolute={true}
        $isActive={Layer.STREET === activeLayer}
        $translateY={isOpenLayerPanel ? 330 : 0}
        onClick={() => changeLayer(Layer.STREET)}
      >
        <BsLayersHalf style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isAbsolute={true}
        $isActive={Layer.DARK === activeLayer}
        $translateY={isOpenLayerPanel ? 220 : 0}
        onClick={() => changeLayer(Layer.DARK)}
      >
        <BsLayersFill style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isAbsolute={true}
        $isActive={Layer.SATELLITE === activeLayer}
        $translateY={isOpenLayerPanel ? 110 : 0}
        onClick={() => changeLayer(Layer.SATELLITE)}
      >
        <MdSatelliteAlt style={ICON_SIZE} />
      </LayerButton>
    </LayersBox>
  );
}
export default LayersOption;
