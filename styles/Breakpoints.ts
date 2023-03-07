export enum SizeNames {
    mobileSmall = "mobileSmall",
    mobile = "mobile",
    tablet = "tablet",
    laptop = "laptop",
    laptopLarge = "laptopLarge",
    desktop = "desktop",
  }
  
  export const size = {
    mobileSmall: 360,
    mobile: 560,
    tablet: 1023,
    laptop: 1441,
    laptopLarge: 1728,
    desktop: 1920,
  };
  
  export const device = {
    mobileSmall: `(max-width: ${size[SizeNames.mobileSmall]}px)`,
    mobile: `(max-width: ${size[SizeNames.mobile]}px)`,
    tablet: `(max-width: ${size[SizeNames.tablet]}px)`,
    laptop: `(min-width: ${size[SizeNames.laptop]}px)`,
    laptopLarge: `(min-width: ${size[SizeNames.laptopLarge]}px)`,
    desktop: `(min-width: ${size[SizeNames.desktop]}px)`,
  };