import React, { Component } from 'react';
import CardContainer from './card_container';

class StatusColumn extends Component {
  render() {
    const  {canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = 'white';
    if (isActive) {
      backgroundColor = 'white';
    } else if (canDrop) {
      backgroundColor = 'white';
    }

    const style = {
      height: '20rem',
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
        <CardContainer name={"First Card!"} />
      </div>
    );
  }
}

export default StatusColumn
