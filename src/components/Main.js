import React, { Component } from 'react'
import CVForm from './CV/CVForm'
import ShowCV from './CV/ShowCV'

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <CVForm></CVForm>
        <ShowCV></ShowCV>
      </div>
    )
  }
}

export default Main
