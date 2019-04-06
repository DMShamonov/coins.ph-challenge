// @flow

import * as React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import history from 'controllers/history';
import configureStore from 'redux/store';
import DevTools from 'components/DevTools';
import AppRouter from 'components/Router';

moment.locale('en');

const store = configureStore();
const IS_DEVELOPMENT_MODE = process.env.NODE_ENV === 'development';

export default function App(): React.Node {
  return (
    <Router history={history}>
      <Provider store={store}>
        <AppRouter />
        {IS_DEVELOPMENT_MODE && <DevTools />}
      </Provider>
    </Router>
  );
}
