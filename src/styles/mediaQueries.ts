export enum SCREEN_SIZE {
  SmallPhone = 'smallPhone',
  Mobile = 'mobile',
  SmallTablet = 'smallTablet',
  Tablet = 'tablet',
  SmallLaptop = 'smallLaptop',
  Laptop = 'laptop',
  Desktop = 'desktop',
}

export const BREAKPOINTS = {
  smallPhone: 0,
  mobile: 320,
  smallTablet: 540,
  tablet: 768,
  smallLaptop: 1024,
  laptop: 1280,
  desktop: 1537,
};

export const mediaQueries = (key: SCREEN_SIZE) => {
  return (style: TemplateStringsArray) =>
    `@media only screen and (min-width: ${BREAKPOINTS[key]}px) {${style}}`;
};

export const mediaQueriesLandscape = () => {
  return (style: TemplateStringsArray) =>
    `@media only screen and (orientation: landscape) and (max-height: 500px) {${style}}`;
};
