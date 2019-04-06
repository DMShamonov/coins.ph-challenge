import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../index';

describe('`Menu` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Menu />)).toMatchSnapshot();
  });
});
