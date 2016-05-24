import React from 'react'
import BeeGenerator from './Generator/BeeGenerator'
import BeeComponent from './Components/BeeComponent'
import BeeGameOver from './Components/BeeGameOver'
import ShootBeeComponent from './Components/ShootBeeComponent'
import RestartBeeGame from './Components/RestartBeeGame'
import {BeeStoreActions} from './Reducers/BeeStoreActions'

export default class BeeApp extends React.Component {
  constructor(props) {
    super(props);

    // assuming strength of bees and resistence remain the same
    // throughout all levels we only provide the number of
    // bees for each level
    const level1 = {
      Queen : 1,
      WorkerBee : 5,
      DroneBee : 8
    };

    //generate Bees for level 1
    let beeGenerator = new BeeGenerator( level1 );
    this.bees = beeGenerator.generateBees();

    //start
    this.startGame();
  }

  startGame = () => {
    this.restartGame();
  }

  restartGame = () => {
    //update redux store
    this.props.store.dispatch( BeeStoreActions.initializeEnvironment( this.bees ) )
  }

  render() {
    let renderBees = this.props.store.getState().map( (item, idx) => {
      return (
        <BeeComponent
          key={idx}
          beeType={item.beeType}
          damagePerHit={item.damagePerHit}
          lifeSpan={item.lifeSpan}
        />
      )
    });
    return (

      <div>
          {renderBees}
          { (this.props.store.getState().length <= 0) ? <BeeGameOver /> : null }
        <hr/>
        <div className="navigationButtons">
          { (this.props.store.getState().length > 0) ?
            <ShootBeeComponent
              store={this.props.store}
            />
            :
            <RestartBeeGame
              restartAction={this.restartGame.bind(this)}
            />
          }
        </div>
      </div>
    )
  }
}
