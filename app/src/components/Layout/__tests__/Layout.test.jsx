import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../index';

describe('`Layout` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Layout />)).toMatchSnapshot();
  });
});
