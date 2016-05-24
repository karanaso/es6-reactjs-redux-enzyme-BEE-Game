import BeeFactory from '../Factory/BeeFactory';

export default class BeeGenerator {
  constructor ( level ) {
    this.level = level;
    this.Bees = [];
  }

  generateBees () {
    for( let BeeType in this.level ) {
      const beesCount = this.level[BeeType];
      let beeCreator = 0;
      for ( beeCreator = 0; beeCreator < beesCount; beeCreator++ ) {
        this.Bees.push( new BeeFactory( BeeType ) );
      }
    }
    return this.Bees;
  }

}
