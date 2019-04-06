import { connect } from 'react-redux';

import MODAL_ACTION_TYPES from 'redux/actionTypes/modal';
import MODALS from 'constants/modals';

import WalletCreateModal from './WalletCreateModal';

function mapStateToProps({ ui: { modal } }) {
  return {
    isOpen: modal === MODALS.CREATE_WALLET,
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
)(WalletCreateModal);
