import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import  { compose } from 'redux';
import { connect } from 'react-redux';
import CardContainer from './card_container'
import Card from './card'

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({

});

class App extends Component {

  render() {

    return(
      <div>
        <p>Hallo squirrels</p>
        <CardContainer name={"First Card!"} />
      </div>
    );
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps,
  mapDispatchToProps)
)(App);
