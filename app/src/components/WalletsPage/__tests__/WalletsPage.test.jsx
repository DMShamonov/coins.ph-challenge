import React from 'react';
import { shallow } from 'enzyme';

import WalletsPage from '../WalletsPage';

describe('`Wallet` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow((
      <WalletsPage
        wallets={[{ id: '__ID__', label: '__LABEL__', balance: 100000000 }]}
        onOpenCreateWalletModal={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `wallets` prop is empty array', () => {
    expect(shallow((
      <WalletsPage
        wallets={[]}
        onOpenCreateWalletModal={jest.fn()}
      />
    ))).toMatchSnapshot();
  });
});
