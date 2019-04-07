import { createStore } from 'redux';
import { commonReducers } from '@wdpui/common-app-wrapper';
import rootReducer from './rootReducer';
import "../setupTests"

describe('rootReducer', () => {
  let store = createStore(rootReducer);

  beforeEach(() => {
    store = createStore(rootReducer);
  });

  it('initial store state for the user in test should be empty ', () => {
    expect(store.getState().user).toEqual(commonReducers.user(undefined, {}));
  });

  it('initial store state for the app config in test should be empty ', () => {
    expect(store.getState().config).toEqual(
      commonReducers.config(undefined, {})
    );
  });

  it('initial store state for the entities in test should be empty ', () => {
    expect(store.getState()).toEqual(rootReducer(undefined, {}));
  });
});
