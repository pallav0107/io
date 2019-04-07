import React from 'react';
import { shallow } from 'enzyme';
import { withTheme } from '../../../../../utils/jest/TestUtils';
import "../../../../setupTests"

describe('renderInputAddon', () => {
  it('should render', () => {
    const component = withTheme(
      <renderInputAddon meta={['touched', 'error']} />
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
