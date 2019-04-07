import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import EnhancedApp, { App } from './App';
import "./setupTests"

const mockStore = configureMockStore();

describe('App Skeleton', () => {
  it('should return null if no theme is present', () => {
    const store = mockStore({
      config: {
        appName: 'test',
      },
    });
    const component = (
      <Provider store={store}>
        <EnhancedApp />
      </Provider>
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toBeNull();
  });
});
