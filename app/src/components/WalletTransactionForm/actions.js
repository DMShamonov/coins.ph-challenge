import { batch } from 'react-redux';

import api, { OTP } from 'controllers/api';

import WALLET_TRANSACTION_FORM_ACTION_TYPES from 'redux/actionTypes/walletTransactionForm';
import WALLET_TRANSACTIONS_ACTION_TYPES from 'redux/actionTypes/walletTransactions';
import MODAL_ACTION_TYPES from 'redux/actionTypes/modal';
import { getErrorMessage } from 'controllers/utilities';

// eslint-disable-next-line import/prefer-default-export
export function createWalletTransaction(walletId) {
  return async function _createWallet(dispatch, getState) {
    dispatch({ type: WALLET_TRANSACTION_FORM_ACTION_TYPES.ON_START_PROCESSING });

    const {
      ui: { walletTransactionForm: { address, amount, walletPassphrase } },
    } = getState();

    try {
      await api().unlock({ otp: OTP });

      const wallet = await api().wallets().get({ id: walletId });
      const { hash } = await wallet.sendCoins({ address, amount, walletPassphrase });
      const transaction = await wallet.getTransaction({ id: hash });

      batch(() => {
        dispatch({
          type: WALLET_TRANSACTIONS_ACTION_TYPES.ON_ADD,
          payload: { transactions: [transaction] },
        });
        dispatch({ type: WALLET_TRANSACTION_FORM_ACTION_TYPES.ON_RESET_FORM });
        dispatch({ type: MODAL_ACTION_TYPES.ON_HIDE });
      });
    } catch (e) {
      const error = getErrorMessage(e) || 'Something went wrong. Try again, please.';

      dispatch({ type: WALLET_TRANSACTION_FORM_ACTION_TYPES.ON_SET_ERROR, error });
    }

    dispatch({ type: WALLET_TRANSACTION_FORM_ACTION_TYPES.ON_FINISH_PROCESSING });
  };
}
