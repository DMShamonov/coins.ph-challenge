// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import SESSION_ACTION_TYPES from 'redux/actionTypes/session';
import api from 'controllers/api';
import { getAccessToken } from 'controllers/session';
import { fetchProfile } from 'controllers/profile';
import Loader from 'components/Loader';

import type { PropsType, StateType } from './types.js.flow';

function mapStateToProps({ common: { profile } }) {
  return {
    isProfileExist: !!profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetProfile(profile) {
      dispatch({ type: SESSION_ACTION_TYPES.LOGIN, payload: { profile } });
    },
    onLogout() {
      dispatch({ type: SESSION_ACTION_TYPES.LOGOUT });
    },
  };
}

export default function _verifySession(WrappedComponent: *) {
  class verifySession extends React.Component<PropsType, StateType> {
    state = {
      isLogged: null,
    };

    componentDidMount(): void {
      const { isProfileExist, onSetProfile, onLogout } = this.props;

      api().session()
        .then(async () => {
          if (!isProfileExist) {
            const profile = await fetchProfile();

            onSetProfile(profile);
          }

          this.setState({ isLogged: true });
        })
        .catch(() => {
          if (getAccessToken() !== null) {
            onLogout();
          }

          this.setState({ isLogged: false });
        });
    }

    render(): React.Node {
      const { isLogged } = this.state;
      const {
        isProfileExist,
        onSetProfile,
        onLogout,
        ...props
      } = this.props;

      return (
        isLogged === null
          ? <Loader />
          : <WrappedComponent isLogged={isLogged} {...props} />
      );
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(verifySession);
}
