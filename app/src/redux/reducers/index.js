import { combineReducers } from 'redux';

import SESSION_ACTION_TYPES from 'redux/actionTypes/session';

import profile from './profile';
import signInForm from './signInForm';

const appReducer = combineReducers({
  common: combineReducers({
    profile,
  }),
  ui: combineReducers({
    signInForm,
  }),
});

export function rootReducer(state, action) {
  if (action.type === SESSION_ACTION_TYPES.LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
}

export default rootReducer;
