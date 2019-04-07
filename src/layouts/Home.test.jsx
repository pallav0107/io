import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Home } from './Home';
import { Container, Backdrop } from './common';
import { CustomerSearchContainer } from '../containers/CustomerSearchContainer';
import { withTheme } from '../../utils/jest/TestUtils';
import "../setupTests"

describe('Home', () => {
  describe('testing styled-components with theming', () => {
    it('should render Backdrop', () => {
      const component = withTheme(<Backdrop />);
      const wrapper = renderer.create(component).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
