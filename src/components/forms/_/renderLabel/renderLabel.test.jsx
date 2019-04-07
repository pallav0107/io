import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './renderLabel';
import "../../../../setupTests"

describe('RenderLabel', () => {
  it('should render', () => {
    const component = <InputForm />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
