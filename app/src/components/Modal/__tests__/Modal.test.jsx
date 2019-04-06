import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../index';

describe('`Modal` component should render correctly', () => {
  test('with default props', () => {
    expect(shallow((
      <Modal
        contentLabel="__LABEL__"
        onClose={jest.fn()}
      >
        __CONTENT__
      </Modal>
    ))).toMatchSnapshot();
  });

  test('when `isOpen` prop is `true`', () => {
    expect(shallow((
      <Modal
        isOpen
        contentLabel="__LABEL__"
        onClose={jest.fn()}
      >
        __CONTENT__
      </Modal>
    ))).toMatchSnapshot();
  });

  test('when `shouldCloseOnOverlayClick` prop is `true`', () => {
    expect(shallow(((
      <Modal
        shouldCloseOnOverlayClick
        contentLabel="__LABEL__"
        onClose={jest.fn()}
      >
        __CONTENT__
      </Modal>
    )))).toMatchSnapshot();
  });

  test('with `className` prop', () => {
    expect(shallow(((
      <Modal
        contentLabel="__LABEL__"
        className="__CLASSNAME__"
        onClose={jest.fn()}
      >
        __CONTENT__
      </Modal>
    )))).toMatchSnapshot();
  });
});
