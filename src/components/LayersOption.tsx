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

function LayersOption({
  changeLayer,
  activeLayer,
  isOpenLayerPanel,
}: LayersOptionProps) {
  return (
    <>
      <LayerButton
        $isActive={Layer.DEFAULT === activeLayer}
        $translateY={isOpenLayerPanel ? 440 : 0}
        onClick={() => changeLayer(Layer.DEFAULT)}
      >
        <BsLayers style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isActive={Layer.STREET === activeLayer}
        $translateY={isOpenLayerPanel ? 330 : 0}
        onClick={() => changeLayer(Layer.STREET)}
      >
        <BsLayersHalf style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isActive={Layer.DARK === activeLayer}
        $translateY={isOpenLayerPanel ? 220 : 0}
        onClick={() => changeLayer(Layer.DARK)}
      >
        <BsLayersFill style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isActive={Layer.SATELLITE === activeLayer}
        $translateY={isOpenLayerPanel ? 110 : 0}
        onClick={() => changeLayer(Layer.SATELLITE)}
      >
        <MdSatelliteAlt style={ICON_SIZE} />
      </LayerButton>
    </>
  );
}
export default LayersOption;
