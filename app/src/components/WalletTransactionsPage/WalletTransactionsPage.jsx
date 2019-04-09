// @flow

import * as React from 'react';

import {
  Page,
  PageHeader,
  PageContent,
  PageTitle,
} from 'components/Page';
import Flex from 'components/Flex';
import Total from 'components/Total';
import WalletTransactions from 'components/WalletTransactions';
import Button from 'components/Button';
import WalletTransactionCreateModal from 'components/WalletTransactionCreateModal';

import type { PropsType } from './types.js.flow';

export default function WalletTransactionsPage({
  wallet,
  walletTransactions,
  onOpenCreateWalletTransactionModal,
}: PropsType): React.Node {
  return (
    <React.Fragment>
      <Page className="wallets-page">
        <PageHeader>
          <Flex>
            <PageTitle>{`"${wallet.label}" transactions`}</PageTitle>
            <Total value={walletTransactions.length} />
          </Flex>
          <Button onClick={onOpenCreateWalletTransactionModal}>Create transaction</Button>
        </PageHeader>
        <PageContent>
          {
            walletTransactions.length
              ? <WalletTransactions walletId={wallet.id} walletTransactions={walletTransactions} />
              : 'You haven\'t wallet transactions yet...'}
        </PageContent>
      </Page>
      <WalletTransactionCreateModal walletId={wallet.id} />
    </React.Fragment>
  );
}
