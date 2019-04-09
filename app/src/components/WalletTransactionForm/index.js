import { connect } from 'react-redux';

import WALLET_TRANSACTION_FORM_ACTION_TYPES from 'redux/actionTypes/walletTransactionForm';

import { createWalletTransaction } from './actions';
import WalletTransactionForm from './WalletTransactionForm';

function mapStateToProps({ ui: { walletTransactionForm } }) {
  const { isProcessing, error, ...formData } = walletTransactionForm;
  const hasError = !!error;

  return {
    ...formData,
    error,
    hasError,
    isFormDisabled: isProcessing,
  };
}

function mapDispatchToProps(dispatch, { walletId }) {
  return {
    onAddressChange({ target: { value: address } }) {
      dispatch({
        type: WALLET_TRANSACTION_FORM_ACTION_TYPES.ON_CHANGE_ADDRESS,
        payload: { address },
      });
    },
    onAmountChange({ target: { value } }) {
      const amount = parseFloat(value);

      dispatch({
        type: WALLET_TRANSACTION_FORM_ACTION_TYPES.ON_CHANGE_AMOUNT,
        payload: { amount: amount > 0 ? amount : 0 },
      });
    },
    onWalletPassphraseChange({ target: { value: walletPassphrase } }) {
      dispatch({
        type: WALLET_TRANSACTION_FORM_ACTION_TYPES.ON_CHANGE_WALLET_PASSPHRASE,
        payload: { walletPassphrase },
      });
    },
    onSubmit(e) {
      e.preventDefault();

      dispatch(createWalletTransaction(walletId));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WalletTransactionForm);
