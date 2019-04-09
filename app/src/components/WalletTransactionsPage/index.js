import { compose } from 'redux';
import { connect } from 'react-redux';

import WALLETS_ACTION_TYPES from 'redux/actionTypes/wallets';
import WALLET_TRANSACTIONS_ACTION_TYPES from 'redux/actionTypes/walletTransactions';
import SESSION_ACTION_TYPES from 'redux/actionTypes/session';
import MODAL_ACTION_TYPES from 'redux/actionTypes/modal';
import MODALS from 'constants/modals';
import preloader from 'decorators/preloader';
import api from 'controllers/api';
import { comparator } from 'controllers/utilities';

import WalletTransactionsPage from './WalletTransactionsPage';

function mapStateToProps({ data: { wallets, walletTransactions } }, { match: { params: { id } } }) {
  return {
    wallet: wallets.find(wallet => wallet.id === id),
    walletTransactions: walletTransactions.sort(
      ({ date: dateA }, { date: dateB }) => comparator(dateA, dateB, true),
    ),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenCreateWalletTransactionModal() {
      dispatch({
        type: MODAL_ACTION_TYPES.ON_SHOW,
        payload: { modal: MODALS.CREATE_WALLET_TRANSACTION },
      });
    },
    dispatch,
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  preloader(async ({ match: { params: { id } }, wallet: walletData, dispatch }) => {
    try {
      const wallet = await api().wallets().get({ id });
      const { transactions } = await wallet.transactions();

      if (!walletData) {
        dispatch({ type: WALLETS_ACTION_TYPES.ON_ADD, payload: { wallets: [wallet.wallet] } });
      }

      dispatch({ type: WALLET_TRANSACTIONS_ACTION_TYPES.ON_SET, payload: { transactions } });
    } catch (e) {
      console.warn(e); // eslint-disable-line no-console

      if (e?.status === 401) {
        dispatch({ type: SESSION_ACTION_TYPES.LOGOUT });
      }
    }
  }),
)(WalletTransactionsPage);
