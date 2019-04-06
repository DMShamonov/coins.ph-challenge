// @flow

import * as React from 'react';
import {
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import ROUTES from 'constants/routes';
import DynamicImport from 'components/DynamicImport';
import Icon from 'components/Icon';
import Menu from 'components/Menu';
import Account from 'components/Account';

const AsyncWalletsPage = DynamicImport({
  loader: () => import('components/WalletsPage' /* webpackChunkName: 'wallets-page' */),
});

export default function Layout(): React.Node {
  return (
    <div className="app">
      <header className="app__header">
        <Link to={ROUTES.ROOT} className="app__logo">
          <Icon theme="btc" />
        </Link>
        <Menu />
      </header>
      <main className="app__main">
        <aside className="app__aside">
          <Account />
        </aside>
        <div className="app__content">
          <Switch>
            <Route exact path={ROUTES.WALLETS} component={AsyncWalletsPage} />
            <Redirect to={ROUTES.WALLETS} />
          </Switch>
        </div>
      </main>
    </div>
  );
}
