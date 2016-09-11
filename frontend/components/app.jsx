import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import  { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({

});

class App extends Component {

  render() {

    return(
      <div>Hallo squirrels</div>
    );
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps,
  mapDispatchToProps)
)(App);
