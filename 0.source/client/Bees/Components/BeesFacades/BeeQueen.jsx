import React from 'react';

export default class BeeQueen extends React.Component {
  constructor ( props ) {
    super( props );
  }

  render () {
    return (
      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
        <div className="well">
          <div>{this.props.beeType}</div>
          <div>maxStaStaminamina : {this.props.lifeSpan}</div>
          <div>damagePerHit : {this.props.damagePerHit}</div>
        </div>
      </div>
    );
  }
}
