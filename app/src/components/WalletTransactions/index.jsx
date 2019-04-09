// @flow

import * as React from 'react';

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from 'components/Table';
import WalletTransaction from 'components/WalletTransaction';

import type { PropsType } from './types.js.flow';

export default function WalletTransactions({
  walletId,
  walletTransactions,
}: PropsType): React.Node {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell width="10%">Fee</TableCell>
          <TableCell width="10%">Value</TableCell>
          <TableCell width="10%">Status</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {walletTransactions.map(({
          id,
          date,
          fee,
          entries,
          pending,
        }) => (
          <WalletTransaction
            date={new Date(date).toISOString()}
            fee={fee}
            value={entries.find(({ account }) => account === walletId).value}
            pending={pending}
            key={id}
          />
        ))}
      </TableBody>
    </Table>
  );
}
