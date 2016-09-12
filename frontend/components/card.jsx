import React, { Component } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

class Card extends Component {

  componentDidMount() {
    const img = new Image();
    img.src = 'koalacartoon.png'
    img.onload = () => this.props.connectDragPreview(img);
  }

  render() {
    const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0.1 : 1;

    const style = {
      opacity: opacity,
    }

    return (
      connectDragSource(connectDropTarget(
        <div className='card' style={style}>
          {text}
        </div>
      ))
    );
  }
}

export default Card;
