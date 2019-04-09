// @flow

import WALLET_TRANSACTION__FORM_ACTION_TYPES from 'redux/actionTypes/walletTransactionForm';

import type { StateType, ActionType } from './types.js.flow';

const INITIAL_STATE = {
  address: '',
  amount: 0,
  walletPassphrase: '',
  error: '',
  isProcessing: false,
};

export default function walletTransactionForm(
  state: StateType = INITIAL_STATE,
  action: ActionType,
): StateType {
  switch (action.type) {
    case WALLET_TRANSACTION__FORM_ACTION_TYPES.ON_CHANGE_ADDRESS:
      return {
        ...state,
        address: action.payload?.address || '',
        error: '',
      };
    case WALLET_TRANSACTION__FORM_ACTION_TYPES.ON_CHANGE_AMOUNT:
      return {
        ...state,
        amount: action.payload?.amount || 0,
        error: '',
      };
    case WALLET_TRANSACTION__FORM_ACTION_TYPES.ON_CHANGE_WALLET_PASSPHRASE:
      return {
        ...state,
        walletPassphrase: action.payload?.walletPassphrase || '',
        error: '',
      };
    case WALLET_TRANSACTION__FORM_ACTION_TYPES.ON_SET_ERROR:
      return {
        ...state,
        error: action?.error || '',
      };
    case WALLET_TRANSACTION__FORM_ACTION_TYPES.ON_START_PROCESSING:
      return {
        ...state,
        isProcessing: true,
      };
    case WALLET_TRANSACTION__FORM_ACTION_TYPES.ON_FINISH_PROCESSING:
      return {
        ...state,
        isProcessing: false,
      };
    case WALLET_TRANSACTION__FORM_ACTION_TYPES.ON_RESET_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}
