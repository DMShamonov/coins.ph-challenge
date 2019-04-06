// @flow

import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DynamicImport from 'components/DynamicImport';
import ROUTES from 'constants/routes';
import ProtectedRoute from 'components/ProtectedRoute';
import Layout from 'components/Layout';

const AsyncSignInPage = DynamicImport({
  loader: () => import('components/SignInPage' /* webpackChunkName: 'sign-in-page' */),
});

export default function Router(): React.Node {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={AsyncSignInPage} />
        <ProtectedRoute path={ROUTES.ROOT} component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}
