// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PagePropsType } from './types.js.flow';

export default function Page({
  className,
  children,
}: PagePropsType): React.Node {
  return (
    <div className={classnames('page', className)}>
      {children}
    </div>
  );
}
