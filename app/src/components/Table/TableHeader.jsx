// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { TableHeaderPropsType } from './types.js.flow';

export default function TableHeader({
  className,
  children,
}: TableHeaderPropsType): React.Node {
  return (
    <div className={classnames('table__header', className)}>
      {children}
    </div>
  );
}
