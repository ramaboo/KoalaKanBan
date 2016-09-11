import React, { Component } from 'react';


class Card extends Component {

  render() {
    const { isDragging , connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    const style = {
      height: '2rem',
      width: '8rem',
      padding: '0.5rem 1rem',
      marginBottom: '0.5rem',
      backgroundColor: 'white',
      cursor: 'move',
      border: '1px dashed gray',
      textAlign: 'center',
      lineHeight: '2rem'
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
