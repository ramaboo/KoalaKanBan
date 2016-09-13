import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props){
    super(props)
    this.state = {
      addToggle: 'toAdd',
      text: ''
    }
    this.findId = this.findId.bind(this);
  }

  toggleAdd(e) {
    e.preventDefault();

    if (this.state.addToggle === 'toAdd') {
      this.setState({
        addToggle: 'adding'
      });
    } else {
      this.setState({
        addToggle: 'toAdd'
      });
    }
  }

  updateText(e) {
    this.setState({
      text: e.currentTarget.value
    })
  }

  addTask(e) {
    e.preventDefault();

    if (this.state.text === '') { return };

    const newCard = {
      id: this.findId(),
      text: this.state.text
    }
    const status = this.props.status;
    this.setState({text: '', addToggle: 'toAdd'})
    this.props.pushCard(newCard, status);
  }

  findId() {
    // i know this is inefficeint. In a real app, Id would be taken care of by the DB
    const mapped = Object.keys(this.props.state.cards).map(key => this.props.state.cards[key]);
    const flattened = mapped.reduce((a,b) => (a.concat(b)));
    const sorted = flattened.sort((a, b) => {
      if (a.id < b.id) { return -1 }
      if (a.id > b.id) { return 1 }
    });
    return sorted[sorted.length - 1].id + 1
  }

  render() {

    let content = this.state.addToggle === 'adding' ?
      <div className='adding-tasks'>
        <textarea className='add-task-input'
          value={this.state.text}
          onChange={this.updateText.bind(this)} />
        <div className='add-task-buttons'>
          <button className='add-button'
            onClick={this.addTask.bind(this)}>
            Add
          </button>
          <button className='x-button'
            onClick={this.toggleAdd.bind(this)}>
            X
          </button>
        </div>
      </div> :

      <div className='add-task' onClick={this.toggleAdd.bind(this)}>
        Create new task...
      </div>

    return(
      <div>
        {content}
      </div>
    )
  }
}

export default AddTask;
