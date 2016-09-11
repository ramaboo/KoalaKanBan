import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from './card'

const cardSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`${item.name} dropped!`);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({

});

export default compose(
  DragSource("CARD", cardSource, collect),
  connect(mapStateToProps, mapDispatchToProps)
)(Card);
