import React from 'react';

export default class BeeGameOver extends React.Component {
  constructor ( props ) {
    super( props );
  }

  render () {
    return (
      <div className="well">
        <h3>The game is Over !!!!</h3>
      </div>
    );
  }
}
