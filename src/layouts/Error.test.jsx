import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Error, { ErrorContainer } from './Error';
import { withTheme } from '../../utils/jest/TestUtils';
import "../setupTests"

describe('Error page', () => {
  it('renders the Error page', () => {
    const component = withTheme(<Error />);
    const wrapper = shallow(component).dive();

    expect(wrapper).toMatchSnapshot();
  });

  describe('testing styled-components with theming', () => {
    it('should render ErrorIcon', () => {
      const component = withTheme(<ErrorContainer />);
      const wrapper = renderer.create(component).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
