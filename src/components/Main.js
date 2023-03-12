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
        personalInfo: '',
      },
      education: {
        university: '',
        degree: '',
        generation: '',
        subject: '',
      },
      experience: {
        company: '',
        position: '',
        from: '',
        to: '',
      },
    }
  }

  handleInput = (e) => {
    const target = e.target
    const name = target.name

    this.setState({
      generalInfo: {
        ...this.state.generalInfo,
        [name]: target.value,
      },
      education: {
        ...this.state.education,
        [name]: target.value,
      },
      experience: {
        ...this.state.education,
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
