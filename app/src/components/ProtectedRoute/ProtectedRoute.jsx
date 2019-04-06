// @flow

import * as React from 'react';
import { Route as ReactRouterDom, Redirect } from 'react-router-dom';

import ROUTES from 'constants/routes';

import type { PropsType } from './types.js.flow';

export default function ProtectedRoute({
  isLogged,
  exact = false,
  path,
  component: WrappedComponent,
}: PropsType): React.Node {
  return (
    <ReactRouterDom
      exact={exact}
      path={path}
      render={props => (
        isLogged
          ? <WrappedComponent {...props} />
          : (
            <Redirect
              to={{ pathname: ROUTES.SIGN_IN, state: { from: props.location } }}
            />
          )
      )}
    />
  );
}
