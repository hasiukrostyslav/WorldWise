import { useContext, useState } from 'react';
import { ScreenSizeContext } from '../context/ScreenSizeContext';

type LayerType = 'default' | 'street' | 'dark' | 'satellite';

export function useLayer() {
  const context = useContext(ScreenSizeContext);
  const [isOpenLayerPanel, setIsOpenLayerPanel] = useState(false);
  const [activeLayer, setActiveLayer] = useState<LayerType>('default');

  const isFullScreen = context?.isFullScreen;
  const exitFullScreen = context?.exitFullScreen;
  const toggleFullScreen = context?.toggleFullScreen;

  function toggleLayerPanel() {
    setIsOpenLayerPanel(!isOpenLayerPanel);
  }

  function changeLayer(layerType: LayerType) {
    setActiveLayer(() => layerType);
  }

  return {
    activeLayer,
    changeLayer,
    toggleLayerPanel,
    isOpenLayerPanel,
    isFullScreen,
    toggleFullScreen,
    exitFullScreen,
  };
}
