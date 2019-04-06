// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { FormErrorPropsType } from './types.js.flow';

export default function FormError({
  className,
  children,
}: FormErrorPropsType): React.Node {
  return (
    <p className={classnames('form__error', className)}>{children}</p>
  );
}
