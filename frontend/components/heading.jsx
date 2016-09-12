import React, { Component } from 'react'

class Heading extends Component {
  constructor(props){
    super(props)
  }

  render() {
    // const style = {
    //   height: '5rem',
    //   border: 'solid thin black',
    //   padding: '0.5rem 1rem',
    //   marginBottom: '1rem',
    //   textAlign: 'center',
    //   lineHeight: '5rem'
    // }
    return(
      <div className='heading'>
        {this.props.heading}
      </div>
    );
  }
}

export default Heading;
