// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { TablePropsType } from './types.js.flow';

export default function Table({
  className,
  children,
}: TablePropsType): React.Node {
  return (
    <div className={classnames('table', className)}>
      {children}
    </div>
  );
}
