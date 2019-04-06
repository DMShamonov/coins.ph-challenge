import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';

describe('`Input` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Input />)).toMatchSnapshot();
  });

  test('with `id` prop', () => {
    expect(shallow(<Input id="__ID__" />)).toMatchSnapshot();
  });

  test('when `type` prop is `number`', () => {
    expect(shallow(<Input type="number" />)).toMatchSnapshot();
  });

  test('with `name` prop', () => {
    expect(shallow(<Input name="__NAME__" />)).toMatchSnapshot();
  });

  test('with `label` prop', () => {
    expect(shallow(<Input label="__LABEL__" />)).toMatchSnapshot();
  });

  test('with `placeholder` prop', () => {
    expect(shallow(<Input placeholder="__PLACEHOLDER__" />)).toMatchSnapshot();
  });

  test('with `value` prop', () => {
    expect(shallow(<Input value="__VALUE__" />)).toMatchSnapshot();
  });

  test('with `defaultValue` prop', () => {
    expect(shallow(<Input defaultValue="__DEFAULT_VALUE__" />)).toMatchSnapshot();
  });

  test('when `autoFocus` prop is `true`', () => {
    expect(shallow(<Input autoFocus />)).toMatchSnapshot();
  });

  test('when `autoComplete` prop is `off`', () => {
    expect(shallow(<Input autoComplete="off" />)).toMatchSnapshot();
  });

  test('when `required` prop is `true`', () => {
    expect(shallow(<Input required />)).toMatchSnapshot();
  });

  test('when `disabled` prop is `true`', () => {
    expect(shallow(<Input disabled />)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<Input className="__CLASSNAME__" />)).toMatchSnapshot();
  });

  test('with `onChange` prop', () => {
    expect(shallow(<Input onChange={jest.fn()} />)).toMatchSnapshot();
  });
});

describe('Check `Input` props', () => {
  describe('Check callback props', () => {
    test('`onChange` called', () => {
      const onChange = jest.fn();
      const wrapper = shallow(<Input onChange={onChange} />);

      wrapper.find('input').simulate('change');

      expect(onChange).toHaveBeenCalled();
    });
  });
});
