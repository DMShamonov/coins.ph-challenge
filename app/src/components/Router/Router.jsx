// @flow

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import DynamicImport from 'components/DynamicImport';
import ROUTES from 'constants/routes';
import ProtectedRoute from 'components/ProtectedRoute';

const AsyncSignInPage = DynamicImport({
  loader: () => import('components/SignInPage' /* webpackChunkName: 'sign-in-page' */),
});

const AsyncLayout = DynamicImport({
  loader: () => import('components/Layout' /* webpackChunkName: 'layout' */),
});

export default function Router(): React.Node {
  return (
    <Switch>
      <Route exact path={ROUTES.SIGN_IN} component={AsyncSignInPage} />
      <ProtectedRoute path={ROUTES.ROOT} component={AsyncLayout} />
    </Switch>
  );
}
