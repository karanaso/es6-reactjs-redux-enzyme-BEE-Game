import { assert } from 'chai';
import Bee from '../../../0.source/client/Bees/Factory/Bee';
import { BeeSchema } from '../../../0.source/client/Bees/Schema/BeeSchema';

describe( 'Testing the Generation of Bee', () => {
  describe( 'Testing the Queen', () => {

    it( 'should generate one Queen and have all valid properties', () => {
      const bee = new Bee( BeeSchema.Queen.type, BeeSchema.Queen.lifeSpan, BeeSchema.Queen.damagePerHit );

      assert.equal( bee.beeType, 'Queen' );
      assert.equal( bee.lifeSpan, 100 );
      assert.equal( bee.damagePerHit, 8 );
      assert.typeOf( bee.hit, 'function' );
    });

    it( 'should have a perform a hit on the Queen', () => {
      const bee = new Bee( BeeSchema.Queen.type, BeeSchema.Queen.lifeSpan, BeeSchema.Queen.damagePerHit );
      bee.hit();

      assert.equal( bee.lifeSpan, 92 );
    });
  });


  describe( 'Testing the WorkerBee', () => {

    it( 'should generate one WorkerBee and have all valid properties', () => {
      const bee = new Bee( BeeSchema.WorkerBee.type, BeeSchema.WorkerBee.lifeSpan, BeeSchema.WorkerBee.damagePerHit );

      assert.equal( bee.beeType, 'WorkerBee' );
      assert.equal( bee.lifeSpan, 75 );
      assert.equal( bee.damagePerHit, 10 );

      assert.typeOf( bee.hit, 'function' );
    });

    it( 'should have a perform a hit on the WorkerBee', () => {
      const bee = new Bee( BeeSchema.WorkerBee.type, BeeSchema.WorkerBee.lifeSpan, BeeSchema.WorkerBee.damagePerHit );
      bee.hit();

      assert.equal( bee.lifeSpan, 65 );
    });
  });


  describe( 'Testing the DroneBee', () => {
    it( 'should generate one DroneBee and have all valid properties', () => {
      const bee = new Bee( BeeSchema.DroneBee.type, BeeSchema.DroneBee.lifeSpan, BeeSchema.DroneBee.damagePerHit );

      assert.equal( bee.beeType, 'DroneBee' );
      assert.equal( bee.lifeSpan, 50 );
      assert.equal( bee.damagePerHit, 12 );
      assert.typeOf( bee.hit, 'function' );
    });

    it( 'should have a perform a hit on the DroneBee', () => {
      const bee = new Bee( BeeSchema.DroneBee.type, BeeSchema.DroneBee.lifeSpan, BeeSchema.DroneBee.damagePerHit );
      bee.hit();

      assert.equal( bee.lifeSpan, 38 );
    });
  });

});
