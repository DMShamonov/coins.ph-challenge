import { connect } from 'react-redux';

import MODAL_ACTION_TYPES from 'redux/actionTypes/modal';
import MODALS from 'constants/modals';

import WalletTransactionCreateModal from './WalletTransactionCreateModal';

function mapStateToProps({ ui: { modal } }, { walletId }) {
  return {
    isOpen: modal === MODALS.CREATE_WALLET_TRANSACTION,
    walletId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClose() {
      dispatch({ type: MODAL_ACTION_TYPES.ON_HIDE });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletTransactionCreateModal);
