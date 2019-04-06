import React from 'react';
import { shallow } from 'enzyme';

import PageContent from '../PageContent';

describe('`PageContent` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<PageContent>__CONTENT__</PageContent>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<PageContent className="__CLASSNAME__">__CONTENT__</PageContent>)).toMatchSnapshot();
  });
});
