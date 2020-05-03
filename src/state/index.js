import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(() => {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
export {
  // eslint-disable-next-line import/prefer-default-export
  store,
};
