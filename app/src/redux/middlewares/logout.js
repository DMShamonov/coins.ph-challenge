import SESSION_ACTION_TYPES from 'redux/actionTypes/session';
import { logout as apiLogout } from 'controllers/api';

export default function logout() {
  return next => async (action) => {
    if (action.type === SESSION_ACTION_TYPES.LOGOUT) {
      await apiLogout();
    }

    return next(action);
  };
}
