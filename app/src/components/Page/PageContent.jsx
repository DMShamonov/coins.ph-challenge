// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PageContentPropsType } from './types.js.flow';

export default function PageContent({
  className,
  children,
}: PageContentPropsType): React.Node {
  return (
    <div className={classnames('page__content', className)}>
      {children}
    </div>
  );
}
