import { assert } from 'chai';
import BeeFactory from '../../../0.source/client/Bees/Factory/BeeFactory';
import { BeeSchema } from '../../../0.source/client/Bees/Schema/BeeSchema';


describe( 'Testing the BeeFactory', () => {
  it( 'Should create one Queen', () => {
    const bee = new BeeFactory( BeeSchema.Queen.type );
    assert.equal( bee.beeType, BeeSchema.Queen.type );
  });

  it( 'Should create one WorkerBee', () => {
    const bee = new BeeFactory( BeeSchema.WorkerBee.type );
    assert.equal( bee.beeType, BeeSchema.WorkerBee.type );
  });

  it( 'Should create one DroneBee', () => {
    const bee = new BeeFactory( BeeSchema.DroneBee.type );
    assert.equal( bee.beeType, BeeSchema.DroneBee.type );
  });
});
