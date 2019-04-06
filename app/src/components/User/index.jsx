// @flow

import * as React from 'react';
import classnames from 'classnames';

import Avatar from 'components/Avatar';

import type { PropsType } from './types.js.flow';

export default function User({
  name,
  avatar = '',
  className,
}: PropsType): React.Node {
  return (
    <section className={classnames('user', className)}>
      <Avatar avatar={avatar} className="user__avatar" />
      <p className="user__name">{name}</p>
    </section>
  );
}
