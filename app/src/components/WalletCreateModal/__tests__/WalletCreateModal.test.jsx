import React from 'react';
import { shallow } from 'enzyme';

import WalletCreateModal from '../WalletCreateModal';

describe('`WalletCreateModal` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<WalletCreateModal isOpen={false} onClose={jest.fn()} />)).toMatchSnapshot();
  });

  test('when `isOpen` prop is `true`', () => {
    expect(shallow(<WalletCreateModal isOpen onClose={jest.fn()} />)).toMatchSnapshot();
  });
});
