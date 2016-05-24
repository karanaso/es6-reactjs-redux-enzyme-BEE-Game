import React from 'react';

export default class RestartBeeGame extends React.Component {
  constructor ( props ) {
    super( props );
  }

  restartGame = () => {
    this.props.restartAction();
  }

  render () {
    return (
      <a
        className="btn btn-primary"
        onClick={this.restartGame.bind( this )}
      >
        Restart Game
      </a>
    );
  }
}
