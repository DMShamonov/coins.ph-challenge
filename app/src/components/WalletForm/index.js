import { connect } from 'react-redux';

import WALLET_FORM_ACTION_TYPES from 'redux/actionTypes/walletForm';

import { createWallet } from './actions';
import WalletForm from './WalletForm';

function mapStateToProps({ ui: { walletForm } }) {
  const { isProcessing, error, ...formData } = walletForm;
  const hasError = !!error;

  return {
    ...formData,
    error,
    hasError,
    isFormDisabled: isProcessing,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLabelChange({ target: { value: label } }) {
      dispatch({ type: WALLET_FORM_ACTION_TYPES.ON_CHANGE_LABEL, payload: { label } });
    },
    onPassphraseChange({ target: { value: passphrase } }) {
      dispatch({ type: WALLET_FORM_ACTION_TYPES.ON_CHANGE_PASSPHRASE, payload: { passphrase } });
    },
    onSubmit(e) {
      e.preventDefault();

      dispatch(createWallet());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletForm);
