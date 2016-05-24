import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import RestartBeeGame from '../../../0.source/client/Bees/Components/RestartBeeGame';

describe( '<RestartBeeGame/> ', () => {

  describe( 'the <a> link', () => {

    it( 'should have an <a link>', () => {
      const wrapper = shallow( <RestartBeeGame /> );
      expect( wrapper.find( 'a' ) ).to.have.length( 1 );
    });

    it( 'should have a class btn-btn primary', () => {
      const wrapper = shallow( <RestartBeeGame /> );
      expect( wrapper.find( 'a' ).hasClass( 'btn btn-primary' ) ).to.equal( true );
    });

    it( 'should have test "Restart Game"', () => {
      const wrapper = shallow( <RestartBeeGame /> );
      expect( wrapper.find( 'a' ).text() ).to.equal( 'Restart Game' );
    });

    it( 'should have a props.restartAction function defined', () => {
      const wrapper = shallow( <RestartBeeGame /> );
      expect( wrapper.find( 'a' ).props().onClick ).to.be.defined;
    });
  });
});
