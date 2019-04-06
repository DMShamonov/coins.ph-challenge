import SESSION_ACTION_TYPES from 'redux/actionTypes/session';
import ROUTES from 'constants/routes';
import { logout as apiLogout } from 'controllers/api';
import history from 'controllers/history';

export default function logout() {
  return next => async (action) => {
    if (action.type === SESSION_ACTION_TYPES.LOGOUT) {
      await apiLogout();

      history.push(ROUTES.SIGN_IN);
    }

    return next(action);
  };
}
