// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from 'constants/routes';
import { TableCell, TableRow } from 'components/Table';
import Value from 'components/Value';
import { calcBtc } from 'controllers/utilities';

import type { PropsType } from './types.js.flow';

export default function Wallet({
  id,
  label,
  balance,
}: PropsType): React.Node {
  return (
    <TableRow>
      <TableCell><Link to={ROUTES.WALLET_TRANSACTIONS.replace(':id', id)}>{id}</Link></TableCell>
      <TableCell>{label}</TableCell>
      <TableCell width="10%">
        <Value value={calcBtc(balance)} />
      </TableCell>
    </TableRow>
  );
}
