import React from 'react';
import { shallow } from 'enzyme';

import Router from '../Router';

describe('`Router` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Router />)).toMatchSnapshot();
  });
});
