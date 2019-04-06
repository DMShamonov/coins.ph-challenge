import { connect } from 'react-redux';

import SESSION_ACTION_TYPES from 'redux/actionTypes/session';

import Account from './Account';

function mapStateToProps({ common: { profile } }) {
  const { name } = profile || {};

  return {
    name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout() {
      dispatch({ type: SESSION_ACTION_TYPES.LOGOUT });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
