import React from 'react';
import { shallow } from 'enzyme';

import PageTitle from '../PageTitle';

describe('`PageTitle` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<PageTitle>__CONTENT__</PageTitle>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<PageTitle className="__CLASSNAME__">__CONTENT__</PageTitle>)).toMatchSnapshot();
  });
});
