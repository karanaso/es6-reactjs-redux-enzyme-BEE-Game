import React from 'react';

export default class BeeDrone extends React.Component {
  constructor ( props ) {
    super( props );
  }

  render () {
    return (
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4">
          <div className="well" style={{ textAlign : 'center' }}>
            <div>{this.props.beeType}</div>
            <div>Stamina : {this.props.lifeSpan} </div>
            <div>damagePerHit : {this.props.damagePerHit}</div>
          </div>
        </div>
    );
  }
}
