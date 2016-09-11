import React, { Component } from 'react';


class Card extends Component {

  render() {
    const { isDragging , connectDragSource, connectDropTarget } = this.props;
    const { text } = this.props;
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
      lineHeight: '2rem',
      color: 'black'
    }

    return (
      connectDragSource(connectDropTarget(
        <div style={style}>
          {text}
        </div>
      ))
    );
  }
}

export default Card;
