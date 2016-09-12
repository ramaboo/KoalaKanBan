import React, { Component } from 'react';
import CardContainer from './card_container';
import Heading from './heading';
import AddTaskContainer from './add_task_container';

class StatusColumn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    const status = this.props.status
    const cards = this.props.state.cards[status];

    let backgroundColor = 'rgba(178,175,164,0.75)';
    if (isActive) {
      backgroundColor = 'rgba(132,170,67,0.9)';
    }

    const style = {
      backgroundColor: backgroundColor,
    };

    return connectDropTarget(
      <div className='status-column' style={style}>
        <Heading heading={this.props.heading} />
        {cards.map((card, i) => {
          return (
            <CardContainer key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  moveCard={this.props.moveCard}
                  status={status} />
          );
        })}
        <AddTaskContainer status={status} />
      </div>
    );
  }
}

export default StatusColumn
