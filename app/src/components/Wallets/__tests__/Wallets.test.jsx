import React from 'react';
import { shallow } from 'enzyme';

import Wallets from '../index';

describe('`Wallets` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Wallets wallets={[{ id: '__ID__', label: '__LABEL__', balance: 100000000 }]} />)).toMatchSnapshot();
  });

  test('when `wallets` prop is empty array', () => {
    expect(shallow(<Wallets wallets={[]} />)).toMatchSnapshot();
  });
});
