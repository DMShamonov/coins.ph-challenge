import React from 'react';
import { shallow } from 'enzyme';

import TableCell from '../TableCell';

describe('`TableCell` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<TableCell />)).toMatchSnapshot();
  });

  test('with `children` prop', () => {
    expect(shallow(<TableCell>__CONTENT__</TableCell>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<TableCell className="__CLASSNAME__">__CONTENT__</TableCell>)).toMatchSnapshot();
  });

  test('with `width` prop', () => {
    expect(shallow(<TableCell width="10%">__CONTENT__</TableCell>)).toMatchSnapshot();
  });
});
