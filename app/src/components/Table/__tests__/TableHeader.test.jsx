import React from 'react';
import { shallow } from 'enzyme';

import TableHeader from '../TableHeader';

describe('`TableHeader` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<TableHeader>__CONTENT__</TableHeader>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<TableHeader className="__CLASSNAME__">__CONTENT__</TableHeader>)).toMatchSnapshot();
  });
});
