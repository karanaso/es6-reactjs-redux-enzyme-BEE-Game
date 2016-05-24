import { assert } from 'chai';
import deepFreeze from 'deep-freeze';
import { createStore } from 'redux';
import { BeeStore } from '../../../0.source/client/Bees/Reducers/BeeStore';
import BeeGenerator from '../../../0.source/client/Bees/Generator/BeeGenerator';
import { BeeStoreActions } from '../../../0.source/client/Bees/Reducers/BeeStoreActions';

describe( 'Testing BeeStore/Redux', () => {
  let props;

  beforeEach( () => {
    props = {
      level1 : {
        Queen : 1,
        WorkerBee : 5,
        DroneBee : 8
      }
    };
    return props;
  });

  it( 'should create the store', () => {
    const store = createStore( BeeStore );

    assert.typeOf( store.dispatch, 'function' );
    assert.typeOf( store.subscribe, 'function' );
    assert.typeOf( store.getState, 'function' );
  });

  it( 'should initialize then environment', () => {
    const beeGenerator = new BeeGenerator( props.level1 );
    const bees = beeGenerator.generateBees();
    deepFreeze( bees );
    const newBees = BeeStore( [], { type : 'initializeEnvironment', bees });
    assert.notEqual( bees, newBees );
  });

  it( 'should test the initializeEnvironment ', () => {
    const store = createStore( BeeStore );
    const beeGenerator = new BeeGenerator( props.level1 );
    const bees = beeGenerator.generateBees();
    deepFreeze( bees );

    store.dispatch({ type : 'initializeEnvironment', bees });
    const newState = store.getState();

    assert.equal( newState.join(), bees.join() );
  });

  it( 'should test the shootABee by shooting at the Queen ', () => {
    const store = createStore( BeeStore );
    const beeGenerator = new BeeGenerator( props.level1 );
    const bees = beeGenerator.generateBees();
    const QueenId = 0;

    store.dispatch( BeeStoreActions.initializeEnvironment( bees ) );
    store.dispatch( BeeStoreActions.shootABee( QueenId ) );
    const newState = store.getState();

    assert.equal( newState[QueenId].lifeSpan, 92 );
  });
});
