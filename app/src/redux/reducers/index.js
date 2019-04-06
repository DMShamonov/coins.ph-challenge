import { combineReducers } from 'redux';

import SESSION_ACTION_TYPES from 'redux/actionTypes/session';

import modal from './modal';
import profile from './profile';
import signInForm from './signInForm';
import walletForm from './walletForm';
import wallets from './wallets';

const appReducer = combineReducers({
  common: combineReducers({
    profile,
  }),
  data: combineReducers({
    wallets,
  }),
  ui: combineReducers({
    modal,
    signInForm,
    walletForm,
  }),
});

export function rootReducer(state, action) {
  if (action.type === SESSION_ACTION_TYPES.LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
}

export default rootReducer;
