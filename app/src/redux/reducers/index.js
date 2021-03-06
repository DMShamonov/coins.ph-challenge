import { combineReducers } from 'redux';

import SESSION_ACTION_TYPES from 'redux/actionTypes/session';

import modal from './modal';
import profile from './profile';
import signInForm from './signInForm';
import walletForm from './walletForm';
import wallets from './wallets';
import walletTransactionForm from './walletTransactionForm';
import walletTransactions from './walletTransactions';

const appReducer = combineReducers({
  common: combineReducers({
    profile,
  }),
  data: combineReducers({
    wallets,
    walletTransactions,
  }),
  ui: combineReducers({
    modal,
    signInForm,
    walletForm,
    walletTransactionForm,
  }),
});

export function rootReducer(state, action) {
  if (action.type === SESSION_ACTION_TYPES.LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
}

export default rootReducer;
