import React from 'react';
import { shallow } from 'enzyme';

import WalletTransaction from '../index';

describe('`WalletTransaction` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<WalletTransaction date="2019-04-09T02:56:04.152Z" fee={1000} value={100000000} pending={false} />)).toMatchSnapshot();
  });

  test('when `pending` prop is `true`', () => {
    expect(shallow(<WalletTransaction date="2019-04-09T02:56:04.152Z" fee={1000} value={100000000} pending />)).toMatchSnapshot();
  });
});
