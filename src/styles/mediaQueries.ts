export enum SCREEN_SIZE {
  Mobile = 'mobile',
  SmallTablet = 'smallTablet',
  Tablet = 'tablet',
  SmallLaptop = 'smallLaptop',
  Laptop = 'laptop',
  Desktop = 'desktop',
}

export const BREAKPOINTS = {
  mobile: 320,
  smallTablet: 540,
  tablet: 768,
  smallLaptop: 1024,
  laptop: 1280,
  desktop: 1537,
};

export const mediaQueries = (key: SCREEN_SIZE) => {
  return (style: TemplateStringsArray) =>
    `@media (min-width: ${BREAKPOINTS[key]}px) {${style}}`;
};
