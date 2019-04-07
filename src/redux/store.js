import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLoggerMiddleware } from '@wdpui/common-logger';
import { apiClientMiddleware } from '@wdpui/common-api-client';
import rootReducer from './rootReducer';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLoggerMiddleware();
const defaultState = {};

const middlewares = [sagaMiddleware, apiClientMiddleware, loggerMiddleware];

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default store;
