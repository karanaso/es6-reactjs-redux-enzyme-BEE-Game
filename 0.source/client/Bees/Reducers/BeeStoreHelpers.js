export const BeeStoreHelpers = {
  shootBee : ( bees, beeId ) => {
    // immutable
    let newState = bees.concat();
    // console.log(bees[0], newState[0]);
    if ( ( beeId >= 0 ) && ( beeId <= newState.length ) ) {
      // call the hit() method for each bee
      newState[beeId].hit();

      // if the queen bee is killed
      if ( ( newState[beeId].beeType === 'Queen' ) && ( newState[beeId].lifeSpan === 0 ) ) {
        // empty the array
        newState = [].concat();
        // console.log('killing all bees, the queen is dead');
      } else {
        // if another bee is dead remove from array of live bees
        if ( newState[beeId].lifeSpan === 0 ) {
          newState.splice( beeId, 1 );
        } 
      }
    }
    return newState;
  }
};
