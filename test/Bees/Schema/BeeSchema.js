import { assert } from 'chai';
import { BeeSchema } from '../../../0.source/client/Bees/Schema/BeeSchema';

describe( 'Testing BeeSchema', () => {
  it( 'should be a valid schema', () => {
    const OriginalSchema = {
      Queen : {
        type : 'Queen',
        lifeSpan : 100,
        damagePerHit : 8
      },
      WorkerBee : {
        type : 'WorkerBee',
        lifeSpan : 75,
        damagePerHit : 10
      },
      DroneBee : {
        type : 'DroneBee',
        lifeSpan : 50,
        damagePerHit : 12
      }
    };

    assert.equal( JSON.stringify( OriginalSchema ), JSON.stringify( BeeSchema ) );
  });
});
