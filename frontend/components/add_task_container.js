import { connect } from 'react-redux';
import { pushCard } from '../actions/card_actions'
import AddTask from './add_task'

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  pushCard: (card, targetStatus) => dispatch(pushCard(card, targetStatus))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);
