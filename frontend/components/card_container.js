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

    if (sourceObj.status !== status) {
      return;
    }

    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    const clientOffset = monitor.getClientOffset();

    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    props.moveCard(dragIndex, hoverIndex, status);

    monitor.getItem().index = hoverIndex;
  }
};

function collectDrag(connect, monitor) {
  return {
    connectDragPreview: connect.dragPreview(),
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
