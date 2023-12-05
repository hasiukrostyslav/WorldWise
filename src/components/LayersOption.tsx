import { MdOutlineLayers, MdLayers, MdSatelliteAlt } from 'react-icons/md';

import { ICON_SIZE } from '../utils/constant';

import { LayerButton } from './MapButton';

enum Layer {
  DEFAULT = 'default',
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
        $translateY={isOpenLayerPanel ? 330 : 0}
        onClick={() => changeLayer(Layer.DEFAULT)}
      >
        <MdOutlineLayers style={ICON_SIZE} />
      </LayerButton>
      <LayerButton
        $isActive={Layer.DARK === activeLayer}
        $translateY={isOpenLayerPanel ? 220 : 0}
        onClick={() => changeLayer(Layer.DARK)}
      >
        <MdLayers style={ICON_SIZE} />
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
