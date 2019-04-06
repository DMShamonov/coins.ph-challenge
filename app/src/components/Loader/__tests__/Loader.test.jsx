import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../index';

describe('`Loader` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Loader />)).toMatchSnapshot();
  });
});
