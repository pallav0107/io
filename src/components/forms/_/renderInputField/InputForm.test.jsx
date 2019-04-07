import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './InputForm';
import { withTheme } from '../../../../../utils/jest/TestUtils';
import "../../../../setupTests"

describe('InputForm', () => {
  it('should render', () => {
    const component = withTheme(<InputForm meta={['touched', 'error']} />);
    const wrapper = shallow(component).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
