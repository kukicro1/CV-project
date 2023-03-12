import React, { Component } from 'react'

class ShowEducation extends Component {
  render() {
    const { generalInfo } = this.props
    return (
      <div className='educationContainerDiv'>
        <h1>Education</h1>
        <div>
          <p>{generalInfo.university}</p>
          <p>{generalInfo.degree}</p>
          <p>{generalInfo.generation}</p>
          <p>{generalInfo.subject}</p>
        </div>
      </div>
    )
  }
}

export default ShowEducation
