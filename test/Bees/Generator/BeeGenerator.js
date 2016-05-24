import { assert } from 'chai';
import BeeGenerator from '../../../0.source/client/Bees/Generator/BeeGenerator';
import { BeeSchema } from '../../../0.source/client/Bees/Schema/BeeSchema';

describe( 'Testing the BeeGenerator generates 14 bees', () => {
  let options;

  beforeEach( () => {
    options = {
      level1 : {
        Queen : 1,
        WorkerBee : 5,
        DroneBee : 8
      }
    };
  });

  it( 'should return 14 bees', () => {
    const beeGenerator = new BeeGenerator( options.level1 );
    const bees = beeGenerator.generateBees();
    assert.equal( 14, bees.length );
  });

  it( 'should have 1 queen', () => {
    const beeGenerator = new BeeGenerator( options.level1 );
    const bees = beeGenerator.generateBees();
    const Queens = bees.filter( ( bee ) => bee.beeType === BeeSchema.Queen.type );
    assert.equal( 1, Queens.length );
  });

  it( 'should have 5 WorkerBees', () => {
    const beeGenerator = new BeeGenerator( options.level1 );
    const bees = beeGenerator.generateBees();
    const WorkerBees = bees.filter( ( bee ) => bee.beeType === BeeSchema.WorkerBee.type );
    assert.equal( 5, WorkerBees.length );
  });

  it( 'should have 8 DroneBees', () => {
    const beeGenerator = new BeeGenerator( options.level1 );
    const bees = beeGenerator.generateBees();
    const DroneBee = bees.filter( ( bee ) => bee.beeType === BeeSchema.DroneBee.type );
    assert.equal( 8, DroneBee.length );
  });
});
