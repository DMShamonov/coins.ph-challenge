// @flow

import * as React from 'react';

import Modal from 'components/Modal';
import WalletTransactionForm from 'components/WalletTransactionForm';

import type { PropsType } from './types.js.flow';

export default function WalletTransactionCreateModal({
  isOpen,
  walletId,
  onClose,
}: PropsType): React.Node {
  return (
    <Modal isOpen={isOpen} contentLabel="Create wallet transaction" onClose={onClose}>
      <WalletTransactionForm walletId={walletId} />
    </Modal>
  );
}
