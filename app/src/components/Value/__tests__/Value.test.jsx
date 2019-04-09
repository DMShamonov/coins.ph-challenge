import React from 'react';
import { shallow } from 'enzyme';

import Value from '../index';

describe('`Value` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Value value={0} />)).toMatchSnapshot();
  });

  test('when `value` prop is positive', () => {
    expect(shallow(<Value value={10} />)).toMatchSnapshot();
  });

  test('when `value` prop is negative', () => {
    expect(shallow(<Value value={-10} />)).toMatchSnapshot();
  });
});
