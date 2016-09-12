import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import  { compose } from 'redux';
import { connect } from 'react-redux';
import StatusColumnContainer from './status_column_container';
import { pushCard, removeCard } from '../actions/card_actions';
import Title from './title';
import Modal from 'react-modal';
import WelcomeModal from './welcome_modal';

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => ({
  pushCard: (card, targetStatus) => dispatch(pushCard(card, targetStatus)),
  removeCard: (index, sourceStatus) => dispatch(removeCard(index, sourceStatus))
});

class App extends Component {
  constructor(props){
    super(props)
    this.customStyles = {
      overlay : {
        backgroundColor : 'rgba(21, 24, 23, 0.5)'
      },
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background            : "none",
        border                : "none"
      }
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
    this.setState({modalIsOpen: true});
 }

 openModal() {
   this.setState({modalIsOpen: true});
 }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const style = {
      // height: '100vh',
      // display: 'flex',
      // alignItems: 'flex-start',
      // margin: '0, auto'
      //overflow: 'scroll'
    }

    return(
      <div>
        <Title />
        <div className='app'>
          <StatusColumnContainer
            status="todo"
            pushCard={this.props.pushCard}
            removeCard={this.props.removeCard}
            heading='To Do' />
          <StatusColumnContainer
            status="inProgress"
            pushCard={this.props.pushCard}
            removeCard={this.props.removeCard}
            heading='In Progress' />
          <StatusColumnContainer
            status="review"
            pushCard={this.props.pushCard}
            removeCard={this.props.removeCard}
            heading='Review' />
          <StatusColumnContainer
            status="complete"
            pushCard={this.props.pushCard}
            removeCard={this.props.removeCard}
            heading='Complete' />
      </div>
      <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={this.customStyles}
         formType={this.state.formType}>

         <WelcomeModal />
      </Modal>
    </div>
    );
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps,
  mapDispatchToProps)
)(App);
