// @flow

import api from 'controllers/api';

import type { ProfileType } from 'types.js.flow';

// eslint-disable-next-line import/prefer-default-export
export async function fetchProfile(): Promise<ProfileType> {
  const { email: { email }, name: { full: name }, username } = await api().me();

  return { email, name, username };
}
