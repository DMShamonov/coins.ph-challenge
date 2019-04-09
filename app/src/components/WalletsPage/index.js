import { compose } from 'redux';
import { connect } from 'react-redux';

import WALLETS_ACTION_TYPES from 'redux/actionTypes/wallets';
import MODAL_ACTION_TYPES from 'redux/actionTypes/modal';
import SESSION_ACTION_TYPES from 'redux/actionTypes/session';
import MODALS from 'constants/modals';
import preloader from 'decorators/preloader';
import api from 'controllers/api';

import WalletsPage from './WalletsPage';

function mapStateToProps({ data: { wallets } }) {
  return {
    wallets,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenCreateWalletModal() {
      dispatch({ type: MODAL_ACTION_TYPES.ON_SHOW, payload: { modal: MODALS.CREATE_WALLET } });
    },
    dispatch,
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  preloader(async ({ dispatch }) => {
    try {
      const { wallets: walletsList } = await api().wallets().list();
      const walletsData = await Promise.all(
        walletsList.map(({ wallet: { id } }) => api().wallets().get({ id })),
      );
      const wallets = walletsData.map(({ wallet }) => wallet);

      dispatch({ type: WALLETS_ACTION_TYPES.ON_SET, payload: { wallets } });
    } catch (e) {
      console.warn(e); // eslint-disable-line no-console

      if (e?.status === 401) {
        dispatch({ type: SESSION_ACTION_TYPES.LOGOUT });
      }
    }
  }),
)(WalletsPage);
