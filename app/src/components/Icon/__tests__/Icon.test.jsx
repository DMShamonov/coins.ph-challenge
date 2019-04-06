import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../index';

describe('`Icon` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Icon theme="avatar-placeholder" />)).toMatchSnapshot();
  });

  test('with `width` prop', () => {
    expect(shallow(<Icon theme="avatar-placeholder" width={48} />)).toMatchSnapshot();
  });

  test('with `height` prop', () => {
    expect(shallow(<Icon theme="avatar-placeholder" height={48} />)).toMatchSnapshot();
  });

  test('with both `width` and `height` props', () => {
    expect(shallow(<Icon theme="avatar-placeholder" width={48} height={48} />)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<Icon theme="avatar-placeholder" className="__CLASSNAME__" />)).toMatchSnapshot();
  });
});
