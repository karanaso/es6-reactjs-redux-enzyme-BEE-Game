
export default class Bee {
  constructor ( beeType, lifeSpan, damagePerHit ) {
    this.beeType = beeType;
    this.lifeSpan = ( ( lifeSpan > 0 ) && ( lifeSpan <= 100 ) ) ? lifeSpan : 0;
    this.damagePerHit = ( ( damagePerHit > 0 ) && ( damagePerHit <= 100 ) ) ? damagePerHit : 0;
  }

  hit = () => {
    this.lifeSpan = ( this.lifeSpan - this.damagePerHit > 0) ? this.lifeSpan - this.damagePerHit : 0;
  }
}
