import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../index';

describe('`Avatar` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Avatar />)).toMatchSnapshot();
  });

  test('with `avatar` prop', () => {
    expect(shallow(<Avatar avatar="__PATH_TO_AVATAR__" />)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<Avatar className="__CLASSNAME__" />)).toMatchSnapshot();
  });
});
