// @flow

import WALLET_FORM_ACTION_TYPES from 'redux/actionTypes/walletForm';

import type { StateType, ActionType } from './types.js.flow';

const INITIAL_STATE = {
  label: '',
  passphrase: '',
  error: '',
  isProcessing: false,
};

export default function walletForm(
  state: StateType = INITIAL_STATE,
  action: ActionType,
): StateType {
  switch (action.type) {
    case WALLET_FORM_ACTION_TYPES.ON_CHANGE_LABEL:
      return {
        ...state,
        label: action.payload?.label || '',
        error: '',
      };
    case WALLET_FORM_ACTION_TYPES.ON_CHANGE_PASSPHRASE:
      return {
        ...state,
        passphrase: action.payload?.passphrase || '',
        error: '',
      };
    case WALLET_FORM_ACTION_TYPES.ON_SET_ERROR:
      return {
        ...state,
        error: action?.error || '',
      };
    case WALLET_FORM_ACTION_TYPES.ON_START_PROCESSING:
      return {
        ...state,
        isProcessing: true,
      };
    case WALLET_FORM_ACTION_TYPES.ON_FINISH_PROCESSING:
      return {
        ...state,
        isProcessing: false,
      };
    case WALLET_FORM_ACTION_TYPES.ON_RESET_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}
