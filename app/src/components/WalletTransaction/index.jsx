// @flow

import * as React from 'react';

import { TableCell, TableRow } from 'components/Table';
import Value from 'components/Value';
import { calcBtc } from 'controllers/utilities';

import type { PropsType } from './types.js.flow';

export default function WalletTransaction({
  date,
  fee,
  value,
  pending,
}: PropsType): React.Node {
  return (
    <TableRow>
      <TableCell>{new Date(date).toISOString()}</TableCell>
      <TableCell width="10%">{fee}</TableCell>
      <TableCell width="10%">
        <Value value={calcBtc(value)} />
      </TableCell>
      <TableCell>{pending ? 'pending...' : 'success'}</TableCell>
    </TableRow>
  );
}
