// @flow

import * as React from 'react';

export default function Loader(): React.Node {
  return (
    <svg className="loader" viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
    </svg>
  );
}
