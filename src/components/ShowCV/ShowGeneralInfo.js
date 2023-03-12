import React, { Component } from 'react'

class ShowGeneralInfo extends Component {
  render() {
    const { generalInfo } = this.props
    return (
      <div className='descriptionContainerDiv'>
        <h1>Personal info</h1>
        <div>{generalInfo.personalInfo}</div>
      </div>
    )
  }
}

export default ShowGeneralInfo
