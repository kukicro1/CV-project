import React, { Component } from 'react'

class ShowExperience extends Component {
  render() {
    const { componentCount } = this.props
    return (
      <div className='experienceContainerDiv'>
        <h1>Experience</h1>
        {componentCount.showExperienceComponents}
      </div>
    )
  }
}

export default ShowExperience
