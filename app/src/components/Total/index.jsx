// @flow

import * as React from 'react';

import type { PropsType } from './types.js.flow';

export default function Total({
  value,
}: PropsType): React.Node {
  return (
    <p className="total">{`${value} Total`}</p>
  );
}
