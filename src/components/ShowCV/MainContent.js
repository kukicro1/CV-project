import React, { Component } from 'react'
import ShowEducation from './ShowEducation'
import ShowExperience from './ShowExperience'
import ShowGeneralInfo from './ShowGeneralInfo'

class MainContent extends Component {
  render() {
    return (
      <div className='mainContent'>
        <section className='mainContentDescriptionContainer'>
          <ShowGeneralInfo></ShowGeneralInfo>
        </section>

        <section className='mainContentEducationContainer'>
          <ShowEducation></ShowEducation>
        </section>

        <section className='mainContentExperienceContainer'>
          <ShowExperience></ShowExperience>
        </section>
      </div>
    )
  }
}

export default MainContent
