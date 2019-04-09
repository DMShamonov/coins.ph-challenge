// @flow

export function comparator(a: *, b: *, reverse: boolean = false): number {
  let result = 0;

  if (a < b) {
    result = -1;
  }

  if (a > b) {
    result = 1;
  }

  return reverse ? result * -1 : result;
}

export function calcBtc(satoshi: number): number {
  return satoshi / 1e8;
}

export function getErrorMessage(e: {
  result?: { message?: string, error?: string }, message?: string,
}): ?string {
  return e?.result?.message || e?.message || e?.result?.error;
}
