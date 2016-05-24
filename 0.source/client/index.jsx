import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BeeStore } from './Bees/Reducers/BeeStore';
import BeeApp from './Bees/BeeApp';

const store = createStore( BeeStore );
const rootElement = document.getElementById( 'app' );

const renderUI = () => {
  render(
    <Provider store={store} >
      <BeeApp store={store} />
    </Provider>,
    rootElement
  );
};

// render the UI Once
renderUI();

// subscribe to re-render
store.subscribe( renderUI );
