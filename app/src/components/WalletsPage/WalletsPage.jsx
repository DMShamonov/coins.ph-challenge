// @flow

import * as React from 'react';

import {
  Page,
  PageHeader,
  PageContent,
  PageTitle,
} from 'components/Page';
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
          <div className="wallets-page__title-wrapper">
            <PageTitle>Your wallets</PageTitle>
            <p className="wallets-page__total">{`${wallets.length} Total`}</p>
          </div>
          <Button onClick={onOpenCreateWalletModal}>Create wallet</Button>
        </PageHeader>
        <PageContent>
          {
            wallets.length
              ? <Wallets wallets={wallets} />
              : 'You haven\'t wallets yet...'
          }
        </PageContent>
      </Page>
      <WalletCreateModal />
    </React.Fragment>
  );
}
