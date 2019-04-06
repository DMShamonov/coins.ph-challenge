// @flow

import SESSION_ACTION_TYPES from 'redux/actionTypes/session';

import type { StateType, ActionType } from './types.js.flow';

export default function profile(
  state: StateType = null,
  action: ActionType,
): StateType {
  if (action.type === SESSION_ACTION_TYPES.LOGIN) {
    return action.payload.profile;
  }

  return state;
}
