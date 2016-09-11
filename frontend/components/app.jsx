import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import  { compose } from 'redux';
import { connect } from 'react-redux';
import StatusColumnContainer from './status_column_container';
import { pushCard, removeCard } from '../actions/card_actions';

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  pushCard: (card, targetStatus) => dispatch(pushCard(card, targetStatus)),
  removeCard: (index, sourceStatus) => dispatch(removeCard(index, sourceStatus))
});

class App extends Component {

  render() {

    return(
      <div>
        <StatusColumnContainer
          status="todo"
          pushCard={this.props.pushCard}
          removeCard={this.props.removeCard} />
        <StatusColumnContainer status="inProgress"
          pushCard={this.props.pushCard}
          removeCard={this.props.removeCard} />
      </div>
    );
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps,
  mapDispatchToProps)
)(App);
