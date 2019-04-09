// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PropsType } from './types.js.flow';

export default function Flex({
  className,
  children,
}: PropsType): React.Node {
  return (
    <div className={classnames('flex', className)}>
      {children}
    </div>
  );
}
