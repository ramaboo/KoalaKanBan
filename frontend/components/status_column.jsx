import React, { Component } from 'react';
import CardContainer from './card_container';
import update from 'react/lib/update';

class StatusColumn extends Component {
  constructor(props) {
    super(props)
    this.moveCard = this.moveCard.bind(this);
    this.state = {
      cards: [{
        id: 1,
        text: 'First'
      }, {
        id: 2,
        text: 'Second'
      }, {
        id: 3,
        text: 'Third'
      }, {
        id: 4,
        text: 'Fourth'
      }, {
        id: 5,
        text: 'Fifth'
      }, {
        id: 6,
        text: 'Sixth'
      }, {
        id: 7,
        text: 'Seventh'
      }]
    };
  }


  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }

  render() {
    const  {canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    const { cards } = this.state;

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
        {cards.map((card, i) => {
          return (
            <CardContainer key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  moveCard={this.moveCard} />
          );
        })}
      </div>
    );
  }
}

export default StatusColumn
