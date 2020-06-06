// TODO: reavaliate if how teh store is constructed and impact on test
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
let devToolsComposer;

// TODO: verify react-router and devtools middlewares, saga enhancers

if (process.env.NODE_ENV === ('development' || 'local')) {
  const logger = createLogger({
    collapsed: true,
  });
  middlewares.push(logger);
  devToolsComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const composeEnhancer = devToolsComposer || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export {
  store,
};
