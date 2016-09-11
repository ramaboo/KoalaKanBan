import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import StatusColumn from './status_column';
import { moveCard } from '../actions/card_actions';

const cardTarget = {
  canDrop(props) {
    return true;
  },

  drop(props, monitor, component) {
    //return { status: props.status };
    const sourceObj = monitor.getItem();
    const status = props.status;
    const index = sourceObj.index;

    if (sourceObj.status !== status) {
      props.removeCard(index, sourceObj.status);
      props.pushCard(sourceObj, status);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  moveCard: (dragIndex, hoverIndex, status) => dispatch(moveCard(dragIndex, hoverIndex, status))
});

export default compose(
  DropTarget("CARD", cardTarget, collect),
  connect(mapStateToProps, mapDispatchToProps)
)(StatusColumn);
