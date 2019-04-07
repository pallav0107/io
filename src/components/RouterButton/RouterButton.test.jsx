import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import RouterButton from './RouterButton';
import "../../setupTests"

describe('CustomerProfile', () => {
  it('should render', () => {
    const component = (
      <BrowserRouter>
        <RouterButton />
      </BrowserRouter>
    );
    const wrapper = shallow(component).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
