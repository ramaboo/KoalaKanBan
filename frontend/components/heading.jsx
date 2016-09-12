import React, { Component } from 'react'

class Heading extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className='heading'>
        {this.props.heading}
      </div>
    );
  }
}

export default Heading;
