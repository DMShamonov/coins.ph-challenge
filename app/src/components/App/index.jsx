// @flow

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import configureStore from 'redux/store';
import DevTools from 'components/DevTools';
import Router from 'components/Router';

moment.locale('en');

const store = configureStore();
const IS_DEVELOPMENT_MODE = process.env.NODE_ENV === 'development';

export default function App(): React.Node {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
        {IS_DEVELOPMENT_MODE && <DevTools />}
      </Provider>
    </BrowserRouter>
  );
}
