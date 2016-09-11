import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from './card';
import { findDOMNode } from 'react-dom';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
      status: props.status,
      text: props.text
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    }
  };


const cardTarget = {
  hover(props, monitor, component) {
    const sourceObj = monitor.getItem();
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const status = props.status;

    //console.log(sourceObj.status, status);
    if (sourceObj.status !== status) {
      return;
    }

    //prevent card replacing itself
    if (dragIndex === hoverIndex) {
      return;
    }

    //find bounding rect in window
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    //get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    //determine mouse pos
    const clientOffset = monitor.getClientOffset();

    // get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    //dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    //dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    //here we do the move
    props.moveCard(dragIndex, hoverIndex, status);

    monitor.getItem().index = hoverIndex;
  }
};

function collectDrag(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
function collectDrop(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({

});

export default compose(
  DragSource("CARD", cardSource, collectDrag),
  DropTarget("CARD", cardTarget, collectDrop),
  connect(mapStateToProps, mapDispatchToProps)
)(Card);
