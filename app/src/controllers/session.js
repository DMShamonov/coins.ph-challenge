// @flow

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export function setAccessToken(accessToken: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function getAccessToken(): ?string {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function removeAccessToken(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
