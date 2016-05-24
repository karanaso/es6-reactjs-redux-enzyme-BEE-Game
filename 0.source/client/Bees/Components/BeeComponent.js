import React from 'react';
import BeeQueen from './BeesFacades/BeeQueen';
import BeeWorker from './BeesFacades/BeeWorker';
import BeeDrone from './BeesFacades/BeeDrone';

// you could create three different components
// but since the specification does not make any specific distinctions for the UI
// the same component will be used
export default class BeeComponent extends React.Component {
  constructor ( props ) {
    super( props );
  }

  render () {
    return (
      <div>
        { this.props.beeType === 'Queen' ? <BeeQueen {...this.props} /> : null}
        { this.props.beeType === 'WorkerBee' ? <BeeWorker {...this.props} /> : null}
        { this.props.beeType === 'DroneBee' ? <BeeDrone {...this.props} /> : null}
      </div>
    );
  }
}
