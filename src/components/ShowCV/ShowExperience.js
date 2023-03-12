import React, { Component } from 'react'

class ShowExperience extends Component {
  render() {
    const { generalInfo } = this.props
    return (
      <div className='experienceContainerDiv'>
        <h1>Experience</h1>
        <div>
          <p>{generalInfo.company}</p>
          <p>{generalInfo.position}</p>
          <p>{generalInfo.from}</p>
          <p>{generalInfo.to}</p>
        </div>
      </div>
    )
  }
}

export default ShowExperience
