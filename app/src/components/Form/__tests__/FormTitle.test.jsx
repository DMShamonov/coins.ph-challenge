import React from 'react';
import { shallow } from 'enzyme';

import FormTitle from '../FormTitle';

describe('`FormTitle` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<FormTitle>__CONTENT__</FormTitle>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<FormTitle className="__CLASSNAME__">__CONTENT__</FormTitle>)).toMatchSnapshot();
  });
});
