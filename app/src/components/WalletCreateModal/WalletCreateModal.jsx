// @flow

import * as React from 'react';

import Modal from 'components/Modal';
import WalletForm from 'components/WalletForm';

import type { PropsType } from './types.js.flow';

export default function WalletCreateModal({
  isOpen,
  onClose,
}: PropsType): React.Node {
  return (
    <Modal isOpen={isOpen} contentLabel="Create wallet" onClose={onClose}>
      <WalletForm />
    </Modal>
  );
}
