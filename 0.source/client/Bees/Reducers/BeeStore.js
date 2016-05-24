import { BeeStoreHelpers } from './BeeStoreHelpers';

export const BeeStore = ( state = [], action ) => {
  switch ( action.type ) {
    case 'initializeEnvironment' :
      // immutable
      return [].concat( action.bees );
    case 'shootABee' :
      return [].concat( BeeStoreHelpers.shootBee( state, action.beeId ) );

    default :
      return state;
  }
};
