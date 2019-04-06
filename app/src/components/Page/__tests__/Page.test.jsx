import React from 'react';
import { shallow } from 'enzyme';

import Page from '../Page';

describe('`Page` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Page>__CONTENT__</Page>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<Page className="__CLASSNAME__">__CONTENT__</Page>)).toMatchSnapshot();
  });
});
