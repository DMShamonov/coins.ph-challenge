// @flow

import WALLETS_ACTION_TYPES from 'redux/actionTypes/wallets';

import type { StateType, ActionType } from './types.js.flow';

export default function wallets(
  state: StateType = [],
  action: ActionType,
): StateType {
  switch (action.type) {
    case WALLETS_ACTION_TYPES.ON_SET:
      return action.payload.wallets;
    case WALLETS_ACTION_TYPES.ON_ADD:
      return [
        ...state,
        ...action.payload.wallets,
      ];
    default:
      return state;
  }
}
