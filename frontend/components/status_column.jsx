import React, { Component } from 'react';
import CardContainer from './card_container';

class StatusColumn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    const todo = this.props.state.cards.todo;

    let backgroundColor = 'white';
    if (isActive) {
      backgroundColor = 'white';
    } else if (canDrop) {
      backgroundColor = 'white';
    }

    const style = {
      height: '25rem',
      width: '10rem',
      marginRight: '1.5rem',
      marginBorrom: '1.5rem',
      padding: '1rem',
      textAlign: 'center',
      fontSize: '1rem',
      lineHeight: 'normal',
      float: 'left',
      backgroundColor: backgroundColor,
      border: 'dashed thin gray'
    };

    return connectDropTarget(
      <div style={style}>
        {todo.map((todo, i) => {
          return (
            <CardContainer key={todo.id}
                  index={i}
                  id={todo.id}
                  text={todo.text}
                  moveCard={this.props.moveCard} />
          );
        })}
      </div>
    );
  }
}

export default StatusColumn
