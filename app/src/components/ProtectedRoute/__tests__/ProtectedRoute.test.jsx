import React from 'react';
import { shallow } from 'enzyme';

import ProtectedRoute from '../ProtectedRoute';

describe('`ProtectedRoute` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow((
      <ProtectedRoute
        isLogged={false}
        path="__PATH__"
        component={<p />}
      />
    ))).toMatchSnapshot();
  });

  test('when `isLogged` prop is `true`', () => {
    expect(shallow((
      <ProtectedRoute
        isLogged
        path="__PATH__"
        component={<p />}
      />
    ))).toMatchSnapshot();
  });

  test('when `exact` prop is `true`', () => {
    expect(shallow((
      <ProtectedRoute
        isLogged={false}
        exact
        path="__PATH__"
        component={<p />}
      />
    ))).toMatchSnapshot();
  });
});
