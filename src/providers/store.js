import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const configureStore = () => {
  const initialState = {};
  const middleware = [sagaMiddleware, logger, routerMiddleware(history)];

  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middleware),
  );
  sagaMiddleware.run(rootSaga);
  window.store = store;
  return store;
};

export default configureStore;
