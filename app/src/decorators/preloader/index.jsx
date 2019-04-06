// @flow

import * as React from 'react';

import Loader from 'components/Loader';

export default function preloader(processor: Function): Function {
  return function _preloader(Wrapped) {
    class Preload extends React.Component<Object, {payload: Object, isProcessing: boolean}> {
      state = {
        payload: {},
        isProcessing: true,
      };

      componentDidMount(): void {
        this.onProcess();
      }

      onProcess = async (): Promise<void> => {
        try {
          const payload = await processor(this.props);

          this.setState({ payload: payload || {} });
        } catch (e) {
          console.warn(e); // eslint-disable-line no-console
        }

        this.setState({ isProcessing: false });
      };

      render(): React.Node {
        const { payload, isProcessing } = this.state;

        return isProcessing ? <Loader /> : <Wrapped {...this.props} {...payload} />;
      }
    }

    return Preload;
  };
}
