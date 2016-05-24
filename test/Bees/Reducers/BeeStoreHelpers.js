import { assert } from 'chai';
import { BeeStoreActions } from '../../../0.source/client/Bees/Reducers/BeeStoreActions';
import { BeeStoreHelpers } from '../../../0.source/client/Bees/Reducers/BeeStoreHelpers';
import BeeGenerator from '../../../0.source/client/Bees/Generator/BeeGenerator';

describe( 'Testing BeestoreHelpers/Redux ', () => {
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

  it( 'should shoot a Queen', () => {
    const QueenId = 0;

    // generate all bees
    const beeGenerator = new BeeGenerator( props.level1 );
    const bees = beeGenerator.generateBees();


    const newStore = BeeStoreHelpers.shootBee( bees, QueenId );

    assert.equal( 92, newStore[QueenId].lifeSpan );
  });

  it( 'should shoot a WorkerBee', () => {
    const WorkerBeeId = 1;

    // generate all bees
    const beeGenerator = new BeeGenerator( props.level1 );
    const bees = beeGenerator.generateBees();

    const newStore = BeeStoreHelpers.shootBee( bees, WorkerBeeId );

    assert.equal( 65, newStore[WorkerBeeId].lifeSpan );
  });

  it( 'should shoot a DroneBee', () => {
    const DrobeBeeId = 10;

    // generate all bees
    const beeGenerator = new BeeGenerator( props.level1 );
    const bees = beeGenerator.generateBees();

    const newStore = BeeStoreHelpers.shootBee( bees, DrobeBeeId );

    assert.equal( 38, newStore[DrobeBeeId].lifeSpan );
  });

  it( 'should shoot the Queen untill its dead and kill others as well', () => {
    const QueenId = 0;

    // generate all bees
    const beeGenerator = new BeeGenerator( props.level1 );
    const bees = beeGenerator.generateBees();

    let newStore = bees.concat();
    while ( newStore.length > 0 ) {
      newStore = BeeStoreHelpers.shootBee( bees, QueenId );
    }

    assert.equal( 0, newStore.length );
  });

});
