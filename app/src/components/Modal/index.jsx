// @flow

import * as React from 'react';
import ReactModal from 'react-modal';
import classnames from 'classnames';

import Button from 'components/Button';
import Icon from 'components/Icon';

import type { PropsType } from './types.js.flow';

export default function Modal({
  appElement = document.getElementById('app'),
  contentLabel,
  isOpen = false,
  shouldCloseOnOverlayClick = true,
  className,
  onClose,
  children,
}: PropsType): React.Node {
  return isOpen && (
    <ReactModal
      appElement={appElement}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      portalClassName={classnames('modal', className)}
      overlayClassName="modal__overlay"
      className="modal__dialog"
      bodyOpenClassName="modal-is-open"
    >
      <Button theme="shell" className="modal__close" onClick={onClose}>
        <Icon theme="close" width={18} title="Close" />
      </Button>
      <div className="modal__content">
        {children}
      </div>
    </ReactModal>
  );
}
