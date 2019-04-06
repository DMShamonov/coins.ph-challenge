// @flow

import * as React from 'react';

import User from 'components/User';
import Button from 'components/Button';
import Icon from 'components/Icon';

import type { PropsType } from './types.js.flow';

export default function Account({
  name,
  avatar = '',
  onLogout,
}: PropsType): React.Node {
  return (
    <div className="account">
      <User avatar={avatar} name={name} className="account__user" />
      <Button theme="shell" className="account__logout" onClick={onLogout}>
        <Icon theme="logout" width={24} title="Logout" />
      </Button>
    </div>
  );
}
