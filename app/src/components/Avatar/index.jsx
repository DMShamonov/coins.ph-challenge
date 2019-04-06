// @flow

import * as React from 'react';
import classnames from 'classnames';

import Icon from 'components/Icon';

import type { PropsType } from './types.js.flow';

export default function Avatar({
  avatar = '',
  className,
}: PropsType): React.Node {
  return (
    <div className={classnames('avatar', className)}>
      {
        avatar
          ? <img src={avatar} width={48} height={48} alt="avatar" className="avatar__image" />
          : <Icon theme="avatar-placeholder" width={48} />
      }
    </div>
  );
}
