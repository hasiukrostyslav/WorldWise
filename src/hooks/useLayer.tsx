import { useState } from 'react';

type LayerType = 'default' | 'street' | 'dark' | 'satellite';

export function useLayer() {
  const [isOpenLayerPanel, setIsOpenLayerPanel] = useState(false);
  const [activeLayer, setActiveLayer] = useState<LayerType>('default');

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
  };
}
