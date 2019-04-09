import React from 'react';
import { shallow } from 'enzyme';

import TableRow from '../TableRow';

describe('`TableRow` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<TableRow>__CONTENT__</TableRow>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<TableRow className="__CLASSNAME__">__CONTENT__</TableRow>)).toMatchSnapshot();
  });
});
