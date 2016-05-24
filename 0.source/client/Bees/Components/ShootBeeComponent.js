import React from 'react';
import { BeeStoreActions } from '../Reducers/BeeStoreActions';

export default class ShootBeeComponent extends React.Component {
  constructor ( props ) {
    super( props );
  }

  shootRandomBee = () => {
    // get the available bees ==> length of array
    const beesLength = this.props.store.getState().length;

    // select a random bee
    const randomBeeId = Math.round( Math.random() * ( beesLength - 1 ) );

    // dispatch a shoot action for the bee
    this.props.store.dispatch( BeeStoreActions.shootABee( randomBeeId ) );
  }

  render () {
    return (
      <a
        className="btn btn-danger ShootBeeComponent"
        onClick={this.shootRandomBee.bind( this )}
      >
      Shoot Random
      </a>
    );
  }
}
