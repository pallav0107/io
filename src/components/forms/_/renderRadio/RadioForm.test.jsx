import React from 'react';
import { shallow } from 'enzyme';
import RadioForm from './RadioForm';
import { withTheme } from '../../../../../utils/jest/TestUtils';
import "../../../../setupTests"

describe('RadioForm', () => {
  it('should render the RadioForm', () => {
    const component = withTheme(<RadioForm />);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
