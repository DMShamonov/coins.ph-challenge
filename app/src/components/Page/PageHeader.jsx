// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PageHeaderPropsType } from './types.js.flow';

export default function PageHeader({
  className,
  children,
}: PageHeaderPropsType): React.Node {
  return (
    <header className={classnames('page__header', className)}>
      {children}
    </header>
  );
}
