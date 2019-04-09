// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PropsType } from './types.js.flow';

export default function Value({
  value,
}: PropsType): React.Node {
  return (
    <p
      className={classnames('value', {
        value_is_negative: value < 0,
        value_is_positive: value > 0,
      })}
    >
      {value}
    </p>
  );
}
