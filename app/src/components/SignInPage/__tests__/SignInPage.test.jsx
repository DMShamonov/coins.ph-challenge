import React from 'react';
import { shallow, mount } from 'enzyme';

import SignInPage from '../SignInPage';

describe('`SignInPage` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow((
      <SignInPage
        isLogged={false}
        login=""
        password=""
        error=""
        hasError={false}
        isFormDisabled={false}
        onChangeLogin={jest.fn()}
        onChangePassword={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `isLogged` prop is `true`', () => {
    expect(shallow((
      <SignInPage
        isLogged
        login=""
        password=""
        error=""
        hasError={false}
        isFormDisabled={false}
        onChangeLogin={jest.fn()}
        onChangePassword={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `hasError` prop is `true` and `error` prop has value', () => {
    expect(shallow((
      <SignInPage
        isLogged={false}
        login=""
        password=""
        error="__ERROR__"
        hasError
        isFormDisabled={false}
        onChangeLogin={jest.fn()}
        onChangePassword={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });

  test('when `isFormDisabled` prop is `true`', () => {
    expect(shallow((
      <SignInPage
        isLogged={false}
        login=""
        password=""
        error=""
        hasError={false}
        isFormDisabled
        onChangeLogin={jest.fn()}
        onChangePassword={jest.fn()}
        onSubmit={jest.fn()}
      />
    ))).toMatchSnapshot();
  });
});

describe('Check `SignInPage` props', () => {
  describe('Check callback props', () => {
    test('`onChangeLogin` called', () => {
      const onChangeLogin = jest.fn();
      const wrapper = mount((
        <SignInPage
          isLogged={false}
          login=""
          password=""
          error=""
          hasError={false}
          isFormDisabled={false}
          onChangeLogin={onChangeLogin}
          onChangePassword={jest.fn()}
          onSubmit={jest.fn()}
        />
      ));

      wrapper.find('input[name="login"]').simulate('change');

      expect(onChangeLogin).toHaveBeenCalled();
    });

    test('`onChangePassword` called', () => {
      const onChangePassword = jest.fn();
      const wrapper = mount((
        <SignInPage
          isLogged={false}
          login=""
          password=""
          error=""
          hasError={false}
          isFormDisabled={false}
          onChangeLogin={jest.fn()}
          onChangePassword={onChangePassword}
          onSubmit={jest.fn()}
        />
      ));

      wrapper.find('input[name="password"]').simulate('change');

      expect(onChangePassword).toHaveBeenCalled();
    });

    test('`onSubmit` called', () => {
      const onSubmit = jest.fn();
      const wrapper = mount((
        <SignInPage
          isLogged={false}
          login=""
          password=""
          error=""
          hasError={false}
          isFormDisabled={false}
          onChangeLogin={jest.fn()}
          onChangePassword={jest.fn()}
          onSubmit={onSubmit}
        />
      ));

      wrapper.find('form').simulate('submit');

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
