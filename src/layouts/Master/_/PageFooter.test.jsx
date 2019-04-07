import React from 'react';
import { shallow } from 'enzyme';
import PageFooter from './PageFooter';
import { withTheme } from '../../../../utils/jest/TestUtils';
import "../../../setupTests"

describe('PageFooter', () => {
  it('should render the page footer', () => {
    const component = withTheme(<PageFooter />);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
