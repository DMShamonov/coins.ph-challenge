import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import verifySession from 'decorators/verifySession';
import SIGN_IN_FORM_ACTION_TYPES from 'redux/actionTypes/signInForm';

import { signIn } from './actions';
import SignInPage from './SignInPage';

function mapStateToProps({ ui: { signInForm } }) {
  const { isProcessing, error, ...formData } = signInForm;
  const hasError = !!error;

  return {
    ...formData,
    error,
    hasError,
    isFormDisabled: isProcessing,
  };
}

function mapDispatchToProps(dispatch, { history }) {
  return {
    onChangeLogin({ target: { value: login } }) {
      dispatch({
        type: SIGN_IN_FORM_ACTION_TYPES.ON_CHANGE_LOGIN,
        payload: { login },
      });
    },
    onChangePassword({ target: { value: password } }) {
      dispatch({
        type: SIGN_IN_FORM_ACTION_TYPES.ON_CHANGE_PASSWORD,
        payload: { password },
      });
    },
    onSubmit(e) {
      e.preventDefault();

      dispatch(signIn(history));
    },
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  verifySession,
)(SignInPage);
