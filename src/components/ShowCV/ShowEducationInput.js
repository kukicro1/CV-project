import React, { Component } from 'react'

class ShowEducationInput extends Component {
  render() {
    const { education } = this.props
    return (
      <div>
        <p>{education.university}</p>
        <p>{education.degree}</p>
        <p>{education.generation}</p>
        <p>{education.subject}</p>
      </div>
    )
  }
}

export default ShowEducationInput
