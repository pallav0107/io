import getBasepath from './configHelper';
import 'raf/polyfill';
import "../setupTests"

describe('config helper', () => {
  it('should return the local basepath', () => {
    expect(getBasepath()).toEqual('/');
  });
});
