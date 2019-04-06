// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PropsType } from './types.js.flow';

/* eslint-disable react/button-has-type */

export default function Button({
  type = 'button',
  theme,
  disabled,
  className,
  children,
  onClick,
}: PropsType): React.Node {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classnames('button', {
        [`button_theme_${(theme: any)}`]: theme,
      }, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
