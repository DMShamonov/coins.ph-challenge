import api from 'controllers/api';

import WALLET_FORM_ACTION_TYPES from 'redux/actionTypes/walletForm';
import WALLETS_ACTION_TYPES from 'redux/actionTypes/wallets';

export function createWallet() { // eslint-disable-line import/prefer-default-export
  return async function _createWallet(dispatch, getState) {
    dispatch({ type: WALLET_FORM_ACTION_TYPES.ON_START_PROCESSING });

    const { ui: { walletForm: { label, passphrase } } } = getState();

    try {
      const { wallet: { wallet } } = await api().wallets().createWalletWithKeychains({ label, passphrase, backupXpubProvider: 'keyternal' });

      dispatch({ type: WALLETS_ACTION_TYPES.ON_ADD, payload: { wallets: [wallet] } });
      dispatch({ type: WALLET_FORM_ACTION_TYPES.ON_RESET_FORM });
    } catch (e) {
      const error = e?.result?.message || 'Something went wrong. Try again, please.';

      dispatch({ type: WALLET_FORM_ACTION_TYPES.ON_SET_ERROR, error });
    }

    dispatch({ type: WALLET_FORM_ACTION_TYPES.ON_FINISH_PROCESSING });
  };
}
