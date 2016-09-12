import React, { Component } from 'react';

class WelcomeModal extends Component {
  render() {
    return (
      <div className='welcome-modal'>
        <h1 className='welcome-title'>Welcome to Koala Kanban</h1>
        <div className='welcome-container'>
          <div className='lite-bg'>
            <div className='koala-pic'></div>
            <div className='welcome-text'>
              Koala Kanban is task management software for koalas. Tasks can be
              created, rearranged, and passed between progress states. It is
              built on React, Redux, and React-DnD. There is no backend at the
              moment, so don't expect any changes you make to persist between sessions.
              To view this message again, click the icon in the upper left corner of the page
            </div>
          </div>
        </div>
        <div className='links'>
          <a href="https://github.com/Shramp/KoalaKanBan"
            className='git-link'></a>
          <a href="https://www.linkedin.com/in/colin-carey-6a2a7757"
            className='linked-link'></a>
        </div>
      </div>
    );
  }
}

export default WelcomeModal;
