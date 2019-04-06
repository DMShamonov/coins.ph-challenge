import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('`Button` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });

  test('when `type` prop is `submit`', () => {
    expect(shallow(<Button type="submit" />)).toMatchSnapshot();
  });

  test('when `disabled` prop is `true`', () => {
    expect(shallow(<Button disabled />)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<Button className="__CLASSNAME__" />)).toMatchSnapshot();
  });

  test('with `children` prop', () => {
    expect(shallow(<Button>__CONTENT__</Button>)).toMatchSnapshot();
  });

  test('with `onClick` prop', () => {
    expect(shallow(<Button onClick={jest.fn()} />)).toMatchSnapshot();
  });
});

describe('Check `Button` props', () => {
  describe('Check callback props', () => {
    test('`onClick` called', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<Button onClick={onClick} />);

      wrapper.simulate('click');

      expect(onClick).toHaveBeenCalled();
    });
  });
});
