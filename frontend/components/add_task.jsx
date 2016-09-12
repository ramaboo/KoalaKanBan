import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props){
    super(props)
    this.state = {
      addToggle: 'toAdd'
    }
  }

  toggleAdd() {
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

  render() {

    let content = this.state.addToggle === 'adding' ?
      <div className='adding-tasks'>
        <textarea className='add-task-input' />
        <div className='add-task-buttons'>
          <button className='add-button'>Add</button>
          <button className='x-button' onClick={this.toggleAdd.bind(this)}> X </button>
        </div>
      </div> :

      <div className='add-task' onClick={this.toggleAdd.bind(this)}>
        Create New Task...
      </div>
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default AddTask;
