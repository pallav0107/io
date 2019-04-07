import React from 'react';
import { shallow } from 'enzyme';
import { FieldArraysForm } from './renderFieldArray';
import { withTheme } from '../../../../../utils/jest/TestUtils';
import "../../../../setupTests"

describe('renderHobbies', () => {
  it('should render', () => {
    const component = withTheme(<renderHobbies meta={['error']} />);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
describe('renderMembers', () => {
  it('should render', () => {
    const component = withTheme(
      <renderMembers meta={['error', 'submitFailed']} />
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
describe('FieldArraysForm', () => {
  it('should render', () => {
    const component = withTheme(<FieldArraysForm />);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
