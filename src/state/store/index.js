/* istanbul ignore file */
// TODO: reavaliate if how teh store is constructed and impact on test
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import sagas from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// TODO: verify react-router and devtools middlewares, saga enhancers

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(sagas);

export {
  store,
};
