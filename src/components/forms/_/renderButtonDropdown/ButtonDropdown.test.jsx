import React from 'react';
import { shallow } from 'enzyme';
import { withTheme } from '../../../../../utils/jest/TestUtils';
import "../../../../setupTests"

describe('ButtonDropdown', () => {
  it('should render', () => {
    const component = withTheme(<renderButtonDropdown meta={['touched', 'error']} />);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
