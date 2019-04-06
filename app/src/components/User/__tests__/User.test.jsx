import React from 'react';
import { shallow } from 'enzyme';

import User from '../index';

describe('`User` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<User name="__USER_NAME__" />)).toMatchSnapshot();
  });

  test('with `avatar` prop', () => {
    expect(shallow(<User name="__USER_NAME__" avatar="__AVATAR__" />)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<User name="__USER_NAME__" className="__CLASSNAME__" />)).toMatchSnapshot();
  });
});
