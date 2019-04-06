import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from '../PageHeader';

describe('`PageHeader` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<PageHeader>__CONTENT__</PageHeader>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<PageHeader className="__CLASSNAME__">__CONTENT__</PageHeader>)).toMatchSnapshot();
  });
});
