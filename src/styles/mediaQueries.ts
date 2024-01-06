export enum SCREEN_SIZE {
  Mobile = 'mobile',
  Tablet = 'tablet',
  LaptopSmall = 'laptopSmall',
  Laptop = 'laptop',
  Desktop = 'desktop',
}

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  laptopSmall: 1024,
  laptop: 1280,
  desktop: 1537,
};

export const mediaQueries = (key: SCREEN_SIZE) => {
  return (style: TemplateStringsArray) =>
    `@media (min-width: ${BREAKPOINTS[key]}px) {${style}}`;
};
