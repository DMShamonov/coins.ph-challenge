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

import type { PropsType } from './types.js.flow';

export default function WalletTransactionsPage({
  wallet,
  walletTransactions,
}: PropsType): React.Node {
  return (
    <React.Fragment>
      <Page className="wallets-page">
        <PageHeader>
          <Flex>
            <PageTitle>{`"${wallet.label}" transactions`}</PageTitle>
            <Total value={walletTransactions.length} />
          </Flex>
        </PageHeader>
        <PageContent>
          {
            walletTransactions.length
              ? <WalletTransactions walletId={wallet.id} walletTransactions={walletTransactions} />
              : 'You haven\'t wallet transactions yet...'}
        </PageContent>
      </Page>
    </React.Fragment>
  );
}
