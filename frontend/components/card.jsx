import React, { Component } from 'react';


class Card extends Component {

  render() {
    const { isDragging , connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    const style = {
      height: '3rem',
      midWidth: '5rem',
      padding: '0.5rem 1rem',
      marginBottom: '0.5rem',
      backGroundColor: 'grey',
      cursor: 'move'
    }

    return (
      connectDragSource(
        <div style={style}>
          {name}
        </div>
      )
    );
  }
}

export default Card;
