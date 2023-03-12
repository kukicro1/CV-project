import React, { Component } from 'react'
import CVForm from './CVForm/CVForm'
import ShowCV from './ShowCV/ShowCV'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        description: '',
      },
    }
  }

  handleInput = (e) => {
    const target = e.target
    const name = target.name

    this.setState({
      generalInfo: {
        [name]: target.value,
        [name]: target.value,
      },
    })
  }

  render() {
    const { generalInfo } = this.state
    return (
      <div className='main'>
        <CVForm handleInput={this.handleInput}></CVForm>
        <ShowCV generalInfo={generalInfo}></ShowCV>
      </div>
    )
  }
}

export default Main
