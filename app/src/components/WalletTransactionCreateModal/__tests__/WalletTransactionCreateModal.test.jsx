import React from 'react';
import { shallow } from 'enzyme';

import WalletTransactionCreateModal from '../WalletTransactionCreateModal';

describe('`WalletTransactionCreateModal` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow((
      <WalletTransactionCreateModal
        isOpen={false}
        walletId="__WALLET_ID__"
        onClose={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `isOpen` prop is `true`', () => {
    expect(shallow((
      <WalletTransactionCreateModal
        isOpen
        walletId="__WALLET_ID__"
        onClose={jest.fn()}
      />
    ))).toMatchSnapshot();
  });
});
