// @flow

import MODAL_ACTION_TYPES from 'redux/actionTypes/modal';

import type { StateType, ActionType } from './types.js.flow';

export default function modal(
  state: StateType = null,
  action: ActionType,
): StateType {
  switch (action.type) {
    case MODAL_ACTION_TYPES.ON_SHOW:
      return action.payload.modal;
    case MODAL_ACTION_TYPES.ON_HIDE:
      return null;
    default:
      return state;
  }
}
