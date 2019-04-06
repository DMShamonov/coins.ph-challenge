// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { FormPropsType } from './types.js.flow';

export default function Form({
  className,
  children,
  onSubmit,
}: FormPropsType): React.Node {
  return (
    <form className={classnames('form', className)} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
