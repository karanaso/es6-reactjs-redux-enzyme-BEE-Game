import { assert } from 'chai';
import { BeeStoreActions } from '../../../0.source/client/Bees/Reducers/BeeStoreActions';
import BeeGenerator from '../../../0.source/client/Bees/Generator/BeeGenerator';

describe( 'Testing BeeStoreActions/Redux ', () => {
  it( 'should initialize an empty environment', () => {
    const action = BeeStoreActions.initializeEnvironment( [] );

    assert.equal( 'initializeEnvironment', action.type );
    assert.equal( 0, action.bees.length );
  });

  it( 'should initialize a complete environment of 14 Bees for level 1', () => {
    const level1 = {
      Queen : 1,
      WorkerBee : 5,
      DroneBee : 8
    };

    const beeGenerator = new BeeGenerator( level1 );
    const bees = beeGenerator.generateBees();

    const action = BeeStoreActions.initializeEnvironment( bees );

    assert.equal( 'initializeEnvironment', action.type );
    assert.equal( 14, action.bees.length );
  });

  it( 'should return object for shooting a bee with id 5', () => {
    const action = BeeStoreActions.shootABee( 5 );

    assert.equal( 'shootABee', action.type );
    assert.equal( 5, action.beeId );
  });
});
