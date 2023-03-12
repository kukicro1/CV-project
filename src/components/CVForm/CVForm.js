import React, { Component } from 'react'
import Education from './Education'
import Experience from './Experience'
import GeneralInfo from './GeneralInfo'

class CVForm extends Component {
  render() {
    const { handleInput } = this.props
    return (
      <div className='CVform'>
        <GeneralInfo handleInput={handleInput} />
        <Education handleInput={handleInput} />
        <Experience handleInput={handleInput} />
        <div className='commandButtons'>
          <button>Load Example</button>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

export default CVForm
