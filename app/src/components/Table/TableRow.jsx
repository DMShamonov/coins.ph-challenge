// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { TableRowPropsType } from './types.js.flow';

export default function TableRow({
  className,
  children,
}: TableRowPropsType): React.Node {
  return (
    <div className={classnames('table__row', className)}>
      {children}
    </div>
  );
}
