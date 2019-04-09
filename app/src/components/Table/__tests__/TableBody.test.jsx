import React from 'react';
import { shallow } from 'enzyme';

import TableBody from '../TableBody';

describe('`TableBody` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<TableBody>__CONTENT__</TableBody>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<TableBody className="__CLASSNAME__">__CONTENT__</TableBody>)).toMatchSnapshot();
  });
});
