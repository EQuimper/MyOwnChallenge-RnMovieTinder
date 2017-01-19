import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducers from './reducers';

const middlewares = [
  thunk,
  logger(),
  promiseMiddleware()
];

const enhancers = compose(
  autoRehydrate({ log: true }),
  applyMiddleware(...middlewares)
);

const store = createStore(reducers, undefined, enhancers);

export default store;
