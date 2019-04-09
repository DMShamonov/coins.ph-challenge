import React from 'react';
import { shallow } from 'enzyme';

import Total from '../index';

describe('`Total` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Total value={10} />)).toMatchSnapshot();
  });
});
