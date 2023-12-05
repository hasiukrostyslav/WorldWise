export const PRIMARY_COLOR = '#00c46a';

export const MAP_CENTER: [number, number] = [48, 15];

export const MAP_LAYERS = {
  default: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  dark: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  satellite:
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
};

export const ICON_SIZE = { fontSize: '2rem' };
