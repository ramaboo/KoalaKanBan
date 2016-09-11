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
    const style = {
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      //overflow: 'scroll'
    }

    return(
      <div style={style}>
        <StatusColumnContainer
          status="todo"
          pushCard={this.props.pushCard}
          removeCard={this.props.removeCard}
          heading='To Do' />
        <StatusColumnContainer
          status="inProgress"
          pushCard={this.props.pushCard}
          removeCard={this.props.removeCard}
          heading='In Progress' />
        <StatusColumnContainer
          status="review"
          pushCard={this.props.pushCard}
          removeCard={this.props.removeCard}
          heading='Review' />
        <StatusColumnContainer
          status="complete"
          pushCard={this.props.pushCard}
          removeCard={this.props.removeCard}
          heading='Complete' />
    </div>
    );
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps,
  mapDispatchToProps)
)(App);
