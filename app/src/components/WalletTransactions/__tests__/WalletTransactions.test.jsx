import React from 'react';
import { shallow } from 'enzyme';

import WalletTransactions from '../index';

describe('`WalletTransaction` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow((
      <WalletTransactions
        walletId="__WALLET_ID__"
        walletTransactions={[{
          id: '__ID__',
          date: '2019-04-09T02:56:04.152Z',
          entries: [{ account: '__WALLET_ID__', value: 100000000 }],
          fee: 1000,
          pending: false,
        }]}
      />
    ))).toMatchSnapshot();
  });

  test('when `walletTransactions` prop is empty array', () => {
    expect(shallow(<WalletTransactions walletId="__WALLET_ID__" walletTransactions={[]} />)).toMatchSnapshot();
  });
});
