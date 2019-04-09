import React from 'react';
import { shallow } from 'enzyme';

import WalletForm from '../WalletForm';

describe('`WalletForm` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow((
      <WalletForm
        label="__LABEL__"
        passphrase="__PASSPHRASE__"
        error=""
        hasError={false}
        isFormDisabled={false}
        onLabelChange={jest.fn()}
        onPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `error` prop is set', () => {
    expect(shallow((
      <WalletForm
        label="__LABEL__"
        passphrase="__PASSPHRASE__"
        error="__ERROR__"
        hasError={false}
        isFormDisabled={false}
        onLabelChange={jest.fn()}
        onPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `hasError` prop is `true`', () => {
    expect(shallow((
      <WalletForm
        label="__LABEL__"
        passphrase="__PASSPHRASE__"
        error=""
        hasError
        isFormDisabled={false}
        onLabelChange={jest.fn()}
        onPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `error` prop is set and `hasError` prop is `true`', () => {
    expect(shallow((
      <WalletForm
        label="__LABEL__"
        passphrase="__PASSPHRASE__"
        error="__ERROR__"
        hasError
        isFormDisabled={false}
        onLabelChange={jest.fn()}
        onPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `isFormDisabled` prop is `true`', () => {
    expect(shallow((
      <WalletForm
        label="__LABEL__"
        passphrase="__PASSPHRASE__"
        error=""
        hasError={false}
        isFormDisabled
        onLabelChange={jest.fn()}
        onPassphraseChange={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });
});
