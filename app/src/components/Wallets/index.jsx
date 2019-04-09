// @flow

import * as React from 'react';

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from 'components/Table';
import Wallet from 'components/Wallet';

import type { PropsType } from './types.js.flow';

export default function Wallets({
  wallets,
}: PropsType): React.Node {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Label</TableCell>
          <TableCell width="10%">Balance</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {wallets.map(({ id, label, balance }) => (
          <Wallet id={id} label={label} balance={balance} key={id} />
        ))}
      </TableBody>
    </Table>
  );
}
