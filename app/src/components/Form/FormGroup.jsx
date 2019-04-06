// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { FormGroupPropsType } from './types.js.flow';

export default function FormGroup({
  className,
  children,
}: FormGroupPropsType): React.Node {
  return (
    <div className={classnames('form__group', className)}>{children}</div>
  );
}
