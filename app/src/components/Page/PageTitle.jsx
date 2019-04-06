// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PageTitlePropsType } from './types.js.flow';

export default function PageTitle({
  className,
  children,
}: PageTitlePropsType): React.Node {
  return (
    <h1 className={classnames('page__title', className)}>
      {children}
    </h1>
  );
}
