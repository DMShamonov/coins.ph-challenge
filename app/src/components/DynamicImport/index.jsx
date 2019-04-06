// @flow

import * as React from 'react';

import Loader from 'components/Loader';

import type { PropsType } from './types.js.flow';

export default function DynamicImport({ loader }: PropsType): (props: Object) => React.Node {
  // $FlowFixMe https://github.com/facebook/flow/issues/7093
  const Component = React.lazy(loader);

  return (props: Object): React.Node => (
    // $FlowFixMe https://github.com/facebook/flow/issues/7093
    <React.Suspense fallback={<Loader />}>
      <Component {...props} />
    </React.Suspense>
  );
}
