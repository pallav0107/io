import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import LoginContainer from './LoginContainer';
import configureMockStore from 'redux-mock-store';
import "../../setupTests"
import 'raf/polyfill';

const mockStore = configureMockStore();

describe('IdentityContainer', () => {
  it('should render', () => {
    const store = mockStore({
      config: {
        appName: 'test',
      },
    });
    const component = (
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
