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

export default function WalletForm({
  label,
  passphrase,
  error,
  hasError,
  isFormDisabled,
  onLabelChange,
  onPassphraseChange,
  onSubmit,
}: PropsType): React.Node {
  return (
    <Form onSubmit={onSubmit}>
      <FormTitle>Create wallet</FormTitle>
      <FormGroup>
        <Input
          name="label"
          label="Label"
          placeholder="Enter wallet label"
          value={label}
          required
          onChange={onLabelChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="passphrase"
          label="Passphrase"
          placeholder="Enter passphrase to encrypt wallet"
          value={passphrase}
          required
          onChange={onPassphraseChange}
        />
      </FormGroup>
      {hasError && <FormError>{error}</FormError>}
      <Button type="submit" disabled={isFormDisabled}>Create wallet</Button>
    </Form>
  );
}
