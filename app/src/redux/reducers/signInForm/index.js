// @flow

import SIGN_IN_FORM_ACTION_TYPES from 'redux/actionTypes/signInForm';

import type { StateType, ActionType } from './types.js.flow';

const INITIAL_STATE = {
  login: '',
  password: '',
  error: '',
  isProcessing: false,
};

export default function signInForm(
  state: StateType = INITIAL_STATE,
  action: ActionType,
): StateType {
  switch (action.type) {
    case SIGN_IN_FORM_ACTION_TYPES.ON_CHANGE_LOGIN:
      return {
        ...state,
        login: action.payload?.login || '',
        error: '',
      };
    case SIGN_IN_FORM_ACTION_TYPES.ON_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload?.password || '',
        error: '',
      };
    case SIGN_IN_FORM_ACTION_TYPES.ON_SET_ERROR:
      return {
        ...state,
        error: action?.error || '',
      };
    case SIGN_IN_FORM_ACTION_TYPES.ON_START_PROCESSING:
      return {
        ...state,
        isProcessing: true,
      };
    case SIGN_IN_FORM_ACTION_TYPES.ON_FINISH_PROCESSING:
      return {
        ...state,
        isProcessing: false,
      };
    case SIGN_IN_FORM_ACTION_TYPES.ON_RESET_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}
