import React, { Component } from 'react';


class Card extends Component {

  render() {
    const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0.1 : 1;
    const backgroundColor = isDragging ? '#B6CC68' : 'white';

    const style = {
      // minHeight: '2rem',
      // width: '12rem',
      // padding: '0.5rem 1rem',
      // marginBottom: '0.5rem',
      // backgroundColor: 'white',
      // cursor: 'move',
      // border: '1px dashed gray',
      // textAlign: 'center',
      // lineHeight: '2rem',
      // color: 'black',
      opacity: opacity,
      backgroundColor: backgroundColor
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
