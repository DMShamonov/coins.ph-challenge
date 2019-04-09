// @flow

import WALLET_TRANSACTIONS_ACTION_TYPES from 'redux/actionTypes/walletTransactions';

import type { StateType, ActionType } from './types.js.flow';

export default function walletTransactions(
  state: StateType = [],
  action: ActionType,
): StateType {
  switch (action.type) {
    case WALLET_TRANSACTIONS_ACTION_TYPES.ON_SET:
      return action.payload.transactions;
    case WALLET_TRANSACTIONS_ACTION_TYPES.ON_ADD:
      return [
        ...state,
        ...action.payload.transactions,
      ];
    default:
      return state;
  }
}
