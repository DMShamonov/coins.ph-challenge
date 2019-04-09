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
import Button from 'components/Button';
import Wallets from 'components/Wallets';
import WalletCreateModal from 'components/WalletCreateModal';

import type { PropsType } from './types.js.flow';

export default function WalletsPage({
  wallets,
  onOpenCreateWalletModal,
}: PropsType): React.Node {
  return (
    <React.Fragment>
      <Page className="wallets-page">
        <PageHeader>
          <Flex>
            <PageTitle>Your wallets</PageTitle>
            <Total value={wallets.length} />
          </Flex>
          <Button onClick={onOpenCreateWalletModal}>Create wallet</Button>
        </PageHeader>
        <PageContent>
          {wallets.length ? <Wallets wallets={wallets} /> : 'You haven\'t wallets yet...'}
        </PageContent>
      </Page>
      <WalletCreateModal />
    </React.Fragment>
  );
}
