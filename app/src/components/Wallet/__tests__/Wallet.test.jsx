import React from 'react';
import { shallow } from 'enzyme';

import Wallet from '../index';

describe('`Wallet` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Wallet id="__ID__" label="__LABEL__" balance={100000000} />)).toMatchSnapshot();
  });
});
