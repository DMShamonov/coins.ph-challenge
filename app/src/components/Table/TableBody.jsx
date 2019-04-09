// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { TableBodyPropsType } from './types.js.flow';

export default function TableBody({
  className,
  children,
}: TableBodyPropsType): React.Node {
  return (
    <div className={classnames('table__body', className)}>
      {children}
    </div>
  );
}
