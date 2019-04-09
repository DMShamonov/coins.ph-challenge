// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { TableCellPropsType } from './types.js.flow';

export default function TableCell({
  width,
  className,
  children,
}: TableCellPropsType): React.Node {
  return (
    <div className={classnames('table__cell', className)} style={{ width }}>
      {children}
    </div>
  );
}
