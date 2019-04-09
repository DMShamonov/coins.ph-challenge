import React from 'react';
import { shallow } from 'enzyme';

import Table from '../Table';

describe('`Table` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Table>__CONTENT__</Table>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<Table className="__CLASSNAME__">__CONTENT__</Table>)).toMatchSnapshot();
  });
});
