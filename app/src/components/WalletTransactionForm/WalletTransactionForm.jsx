// @flow

import * as React from 'react';

import {
  Form,
  FormTitle,
  FormGroup,
  FormError,
} from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';

import type { PropsType } from './types.js.flow';

export default function WalletTransactionForm({
  address,
  amount,
  walletPassphrase,
  error,
  hasError,
  isFormDisabled,
  onAddressChange,
  onAmountChange,
  onWalletPassphraseChange,
  onSubmit,
}: PropsType): React.Node {
  return (
    <Form onSubmit={onSubmit}>
      <FormTitle>Create transaction</FormTitle>
      <FormGroup>
        <Input
          name="address"
          label="Address"
          placeholder="Enter a wallet address"
          value={address}
          required
          disabled={isFormDisabled}
          onChange={onAddressChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="number"
          name="amount"
          label="Amount"
          placeholder="Enter an amount of satoshi"
          value={amount || ''}
          required
          disabled={isFormDisabled}
          onChange={onAmountChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="walletPassphrase"
          label="Wallet passphrase"
          placeholder="Enter a wallet passphrase"
          value={walletPassphrase}
          autoComplete="off"
          required
          disabled={isFormDisabled}
          onChange={onWalletPassphraseChange}
        />
      </FormGroup>
      {hasError && <FormError>{error}</FormError>}
      <Button type="submit" disabled={isFormDisabled}>Create transaction</Button>
    </Form>
  );
}
