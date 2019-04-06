import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';

describe('`Form` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow(<Form>__CONTENT__</Form>)).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(<Form className="__CLASSNAME__">__CONTENT__</Form>)).toMatchSnapshot();
  });
});

describe('Check `Form` props', () => {
  describe('Check callback props', () => {
    test('`onSubmit` called', () => {
      const onSubmit = jest.fn();
      const wrapper = shallow(<Form onSubmit={onSubmit}>__CONTENT__</Form>);

      wrapper.simulate('submit');

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
