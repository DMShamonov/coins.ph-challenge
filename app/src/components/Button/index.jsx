// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PropsType } from './types.js.flow';

/* eslint-disable react/button-has-type */

export default function Button({
  type = 'button',
  disabled,
  className,
  children,
  onClick,
}: PropsType): React.Node {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classnames('button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
