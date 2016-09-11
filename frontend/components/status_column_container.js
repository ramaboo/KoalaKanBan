import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { compose } from 'redux';
import StatusColumn from './status_column';
import { moveCard } from '../actions/card_actions';

const cardTarget = {
  canDrop(props) {
    return true;
  },

  drop(props) {
    return { status: props.status };
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
