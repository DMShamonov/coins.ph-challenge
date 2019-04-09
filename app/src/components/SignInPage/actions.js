import api, { OTP } from 'controllers/api';
import { setAccessToken } from 'controllers/session';
import { fetchProfile } from 'controllers/profile';

import ROUTES from 'constants/routes';
import SIGN_IN_FORM_ACTION_TYPES from 'redux/actionTypes/signInForm';
import SESSION_ACTION_TYPES from 'redux/actionTypes/session';
import { getErrorMessage } from 'controllers/utilities';

export function signIn(history) { // eslint-disable-line import/prefer-default-export
  return async function _signIn(dispatch, getState) {
    dispatch({ type: SIGN_IN_FORM_ACTION_TYPES.ON_START_PROCESSING });

    const { ui: { signInForm: { login, password } } } = getState();

    try {
      const { access_token } = await api().authenticate({ username: login, password, otp: OTP });

      setAccessToken(access_token);

      const profile = await fetchProfile();

      dispatch({ type: SESSION_ACTION_TYPES.LOGIN, payload: { profile } });

      history.push(ROUTES.ROOT);

      dispatch({ type: SIGN_IN_FORM_ACTION_TYPES.ON_RESET_FORM });
    } catch (e) {
      const error = getErrorMessage(e) || 'An error has been occurred. Try again, please.';

      dispatch({ type: SIGN_IN_FORM_ACTION_TYPES.ON_SET_ERROR, error });
    }

    dispatch({ type: SIGN_IN_FORM_ACTION_TYPES.ON_FINISH_PROCESSING });
  };
}
