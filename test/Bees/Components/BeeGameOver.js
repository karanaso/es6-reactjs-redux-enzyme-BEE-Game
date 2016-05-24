import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import BeeGameOver from '../../../0.source/client/Bees/Components/BeeGameOver';

describe( '<BeeGameOver/>', () => {

  it( 'should have an <div>', () => {
    const wrapper = shallow( <BeeGameOver /> );
    expect( wrapper.find( 'div' ) ).to.have.length( 1 );
  });

  it( 'should have an <h3> withing a', () => {
    const wrapper = shallow( <BeeGameOver /> );
    expect( wrapper.find( 'div h3' ) ).to.have.length( 1 );
  });

  it( 'should have an div h3 with text "The game is Over !!!"', () => {
    const wrapper = shallow( <BeeGameOver /> );
    expect( wrapper.find( 'div h3' ).text() ).to.equal( 'The game is Over !!!!' );
  });

});
