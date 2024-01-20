export const PRIMARY_COLOR = '#00c46a';

export const MAP_CENTER: [number, number] = [48, 15];

const MAP_TOKEN =
  'KAjKkjWgOe4IyA2wbWjzD9FStugwX8P9uY9FXZNMefm1FloijXdpkcJqqEQYRso2';

export const MAP_LAYERS = {
  default: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  street: `https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=${MAP_TOKEN}`,
  dark: `https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${MAP_TOKEN}`,
  satellite:
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
};

export const ICON_SIZE = { fontSize: '2rem' };

export const EMAIL_REGEX =
  /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
