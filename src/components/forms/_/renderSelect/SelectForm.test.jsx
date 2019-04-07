import React from 'react';
import { shallow } from 'enzyme';
import SelectForm from './SelectForm';
import { withTheme } from '../../../../../utils/jest/TestUtils';
import "../../../../setupTests"

describe('SelectForm', () => {
  it('should render', () => {
    const component = withTheme(
      <SelectForm options={['Mr', 'Mrs', 'Miss']} meta={['touched', 'error']} />
    );
    const wrapper = shallow(component).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
