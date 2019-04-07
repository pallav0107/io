import { ThemeWBC, LogoWbc200 } from '@wdpui/react-gel';
import "../../setupTests"

import {
  getThemeSelector,
  getBrandIdSelector,
  getLogo,
  titleCase,
  getLogoElement,
} from './theme';

describe('theme selectors', () => {
  describe('getBrandIdSelector', () => {
    it('should return brandId if present', () => {
      expect(getBrandIdSelector({ config: { brandId: 'test' } })).toBe('test');
    });
  });

  describe('getThemeSelector', () => {
    it('should return an empty array if no brandId was found for supporting GEL', () => {
      expect(getThemeSelector('Nope')).toBeNull();
    });

    it('should return an array of theme objects GEL given a brandId', () => {
      expect(getThemeSelector({ config: { brandId: 'WBC' } })).toEqual(
        ThemeWBC
      );
    });
  });

  describe('getLogo', () => {
    it('should return a react logo element irrespective of casing in the config object', () => {
      expect(getLogo({ config: { brandId: 'WBC' } })).toBe(LogoWbc200);
    });
  });

  describe('getLogoElement', () => {
    it('should return a React logo element', () => {
      expect(getLogoElement('Wbc')).toBe(LogoWbc200);
    });
  });

  describe('titleCase', () => {
    it('should return a word in TitleCase', () => {
      expect(titleCase('MYWORD')).toBe('Myword');
      expect(titleCase('myword')).toBe('Myword');
      expect(titleCase('MyWord')).toBe('Myword');
      expect(titleCase('MyWORD')).toBe('Myword');
    });
  });
});
