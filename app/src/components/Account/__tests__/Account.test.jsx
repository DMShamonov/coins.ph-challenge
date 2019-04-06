import React from 'react';
import { shallow, mount } from 'enzyme';

import Account from '../Account';

describe('`Account` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Account name="__USER_NAME__" onLogout={jest.fn()} />)).toMatchSnapshot();
  });

  test('with `avatar` prop', () => {
    expect(shallow(<Account name="__USER_NAME__" avatar="__AVATAR__" onLogout={jest.fn()} />)).toMatchSnapshot();
  });
});

describe('Check `Account` props', () => {
  describe('Check callback props', () => {
    test('`onLogout` called', () => {
      const onLogout = jest.fn();
      const wrapper = mount(<Account name="__USER_NAME__" onLogout={onLogout} />);

      wrapper.find('button').simulate('click');

      expect(onLogout).toHaveBeenCalled();
    });
  });
});
