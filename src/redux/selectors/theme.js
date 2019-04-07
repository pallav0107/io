import { createSelector } from 'reselect';
import {
  Themes,
  LogoBom,
  LogoBsa,
  LogoBt,
  LogoStg,
  LogoWbc200,
} from '@wdpui/react-gel';

const Logos = {
  LogoBom,
  LogoBsa,
  LogoBt,
  LogoStg,
  LogoWbc200,
};

const configSelector = state => (state ? state.config : state);

export const getBrandIdSelector = createSelector(
  [configSelector],
  config => (config ? config.brandId : null)
);

export const getThemeSelector = createSelector(
  [getBrandIdSelector],
  brandId => {
    const themeKey = `Theme${brandId}`;
    return Themes[themeKey] ? Themes[themeKey] : null;
  }
);

export const titleCase = str => {
  const first = str.substring(0, 1);
  const rest = str.substring(1);

  return first.toUpperCase() + rest.toLowerCase();
};

export const getLogoElement = brand => {
  switch (brand) {
    case 'Wbc':
      return LogoWbc200;
    default:
      return Logos[`Logo${brand}`];
  }
};

export const getLogo = createSelector(
  [getBrandIdSelector],
  brandId => {
    if (!brandId) return null;
    const brand = titleCase(brandId);
    return getLogoElement(brand);
  }
);
