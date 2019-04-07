import React from 'react';
import { shallow } from 'enzyme';
import CheckForm from './CheckForm';
import { withTheme } from '../../../../../utils/jest/TestUtils';
import "../../../../setupTests"

describe('CheckForm', () => {
  it('should render the CheckForm', () => {
    const component = withTheme(<CheckForm />);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
