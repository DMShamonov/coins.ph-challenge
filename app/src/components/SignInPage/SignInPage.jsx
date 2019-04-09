// @flow

import * as React from 'react';
import { Redirect } from 'react-router-dom';

import ROUTES from 'constants/routes';
import { Form, FormGroup, FormError } from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';

import type { PropsType } from './types.js.flow';

export default function SignInPage({
  isLogged,
  login,
  password,
  error,
  hasError,
  isFormDisabled,
  onChangeLogin,
  onChangePassword,
  onSubmit,
}: PropsType): React.Node {
  if (isLogged) {
    return <Redirect to={{ pathname: ROUTES.ROOT }} />;
  }

  return (
    <div className="sign-in">
      <div className="sign-in__content">
        <h1 className="sign-in__title">Sign in to BitGo account</h1>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Input
              type="email"
              name="login"
              label="Login"
              placeholder="Enter your BitGo login"
              value={login}
              autoFocus
              required
              disabled={isFormDisabled}
              onChange={onChangeLogin}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your BitGo password"
              value={password}
              autoComplete="off"
              required
              disabled={isFormDisabled}
              onChange={onChangePassword}
            />
          </FormGroup>
          {hasError && <FormError>{error}</FormError>}
          <Button type="submit" disabled={isFormDisabled}>Sign in</Button>
        </Form>
      </div>
    </div>
  );
}
