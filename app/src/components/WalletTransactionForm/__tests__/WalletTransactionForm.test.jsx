import React from 'react';
import { shallow } from 'enzyme';

import WalletTransactionForm from '../WalletTransactionForm';

describe('`WalletTransactionForm` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow((
      <WalletTransactionForm
        address="__ADDRESS__"
        amount={100000000}
        walletPassphrase="__WALLET_PASSPHRASE__"
        error=""
        hasError={false}
        isFormDisabled={false}
        onAddressChange={jest.fn()}
        onAmountChange={jest.fn()}
        onWalletPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `error` prop is set', () => {
    expect(shallow((
      <WalletTransactionForm
        address="__ADDRESS__"
        amount={100000000}
        walletPassphrase="__WALLET_PASSPHRASE__"
        error="__ERROR__"
        hasError={false}
        isFormDisabled={false}
        onAddressChange={jest.fn()}
        onAmountChange={jest.fn()}
        onWalletPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `hasError` prop is `true`', () => {
    expect(shallow((
      <WalletTransactionForm
        address="__ADDRESS__"
        amount={100000000}
        walletPassphrase="__WALLET_PASSPHRASE__"
        error=""
        hasError
        isFormDisabled={false}
        onAddressChange={jest.fn()}
        onAmountChange={jest.fn()}
        onWalletPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `error` prop is set and `hasError` prop is `true`', () => {
    expect(shallow((
      <WalletTransactionForm
        address="__ADDRESS__"
        amount={100000000}
        walletPassphrase="__WALLET_PASSPHRASE__"
        error="__ERROR__"
        hasError
        isFormDisabled={false}
        onAddressChange={jest.fn()}
        onAmountChange={jest.fn()}
        onWalletPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `isFormDisabled` prop is `true`', () => {
    expect(shallow((
      <WalletTransactionForm
        address="__ADDRESS__"
        amount={100000000}
        walletPassphrase="__WALLET_PASSPHRASE__"
        error=""
        hasError={false}
        isFormDisabled
        onAddressChange={jest.fn()}
        onAmountChange={jest.fn()}
        onWalletPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });
});
