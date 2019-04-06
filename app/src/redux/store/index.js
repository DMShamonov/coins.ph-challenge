import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import logout from 'redux/middlewares/logout';
import DevTools from 'components/DevTools';
import reducer from 'redux/reducers';

const isDev = process.env.NODE_ENV !== 'production';

const middlewares = [
  reduxThunk,
  isDev && createLogger(),
  logout,
].filter(Boolean);

const enhancers = [
  applyMiddleware(...middlewares),
  isDev && DevTools.instrument(),
].filter(Boolean);

export default initialState => createStore(
  reducer,
  initialState,
  compose(...enhancers),
);
