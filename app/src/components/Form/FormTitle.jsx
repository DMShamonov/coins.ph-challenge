// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { FormTitlePropsType } from './types.js.flow';

export default function FormTitle({
  className,
  children,
}: FormTitlePropsType): React.Node {
  return (
    <p className={classnames('form__title', className)}>{children}</p>
  );
}
