// @flow

import * as React from 'react';
import classnames from 'classnames';

import type { PropsType } from './types.js.flow';

export default function Icon({
  theme,
  width,
  height,
  title,
  className,
}: PropsType): React.Node {
  return (
    <span
      className={classnames('icon', {
        [`icon_theme_${(theme: any)}`]: theme,
      }, className)}
      style={{
        width: width || height,
        height: height || width,
        // $FlowFixMe
        backgroundSize: (width || height) && `${width || height}px ${height || width}px`,
      }}
      title={title}
    />
  );
}
