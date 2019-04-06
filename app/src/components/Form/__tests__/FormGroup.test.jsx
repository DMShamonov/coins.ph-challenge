import React from 'react';
import { shallow } from 'enzyme';

import FormGroup from '../FormGroup';

describe('`FormGroup` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<FormGroup>__CONTENT__</FormGroup>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<FormGroup className="__CLASSNAME__">__CONTENT__</FormGroup>)).toMatchSnapshot();
  });
});
