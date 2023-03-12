import React, { Component } from 'react'
import Education from './Education'
import Experience from './Experience'
import GeneralInfo from './GeneralInfo'

class CVForm extends Component {
  render() {
    return (
      <div className='CVform'>
        <GeneralInfo handleInput={this.props.handleInput} />
        <Education />
        <Experience />
        <div className='commandButtons'>
          <button>Load Example</button>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

export default CVForm
