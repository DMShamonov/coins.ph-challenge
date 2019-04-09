import BitGo from 'bitgo';

import { getAccessToken, removeAccessToken } from 'controllers/session';

let _api = new BitGo.BitGo({ accessToken: getAccessToken() });

export const OTP = '0000000';

export async function logout() {
  try {
    await _api.logout();
  } catch (e) {} // eslint-disable-line no-empty

  removeAccessToken();

  _api = new BitGo.BitGo();
}

export default function api() {
  return _api;
}
