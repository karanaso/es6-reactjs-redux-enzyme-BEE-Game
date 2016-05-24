import Bee from './Bee';
import { BeeSchema } from '../Schema/BeeSchema';

export default class BeeFactory {
  constructor ( beeType ) {
    // if its a valid BeeType
    if ( typeof BeeSchema[beeType] !== undefined ) {
      return new Bee(
        BeeSchema[beeType].type,
        BeeSchema[beeType].lifeSpan,
        BeeSchema[beeType].damagePerHit,
      );
    }
    return {};
  }
}
