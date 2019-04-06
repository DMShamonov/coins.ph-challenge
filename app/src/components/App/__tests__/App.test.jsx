import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';

describe('`App` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
