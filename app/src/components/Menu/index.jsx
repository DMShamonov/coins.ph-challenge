// @flow

import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Routes from 'constants/routes';
import Icon from 'components/Icon';

export default function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink exact to={Routes.WALLETS} className="menu__link" activeClassName="menu__link_active">
            <Icon theme="btc-wallet" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
