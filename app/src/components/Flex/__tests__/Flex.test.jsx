import React from 'react';
import { shallow } from 'enzyme';

import Flex from '../index';

describe('`Flex` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Flex>__CONTENT__</Flex>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<Flex className="__CLASSNAME__">__CONTENT__</Flex>)).toMatchSnapshot();
  });
});
