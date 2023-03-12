import React, { Component } from 'react'
import ShowEducation from './ShowEducation'
import ShowExperience from './ShowExperience'
import ShowGeneralInfo from './ShowGeneralInfo'

class MainContent extends Component {
  render() {
    const { generalInfo } = this.props
    return (
      <div className='mainContent'>
        <section className='mainContentDescriptionContainer'>
          <ShowGeneralInfo generalInfo={generalInfo} />
        </section>

        <section className='mainContentEducationContainer'>
          <ShowEducation generalInfo={generalInfo} />
        </section>

        <section className='mainContentExperienceContainer'>
          <ShowExperience generalInfo={generalInfo} />
        </section>
      </div>
    )
  }
}

export default MainContent
