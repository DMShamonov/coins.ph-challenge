import React from 'react';
import { shallow } from 'enzyme';

import FormError from '../FormError';

describe('`FormError` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<FormError>__CONTENT__</FormError>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<FormError className="__CLASSNAME__">__CONTENT__</FormError>)).toMatchSnapshot();
  });
});
