import React from 'react'
import ShowEducation from './ShowEducation'
import ShowExperience from './ShowExperience'
import ShowGeneralInfo from './ShowGeneralInfo'

const MainContent = ({ generalInfo, componentCount }) => {
  return (
    <div className='mainContent'>
      <section className='mainContentDescriptionContainer'>
        <ShowGeneralInfo generalInfo={generalInfo} />
      </section>

      <section className='mainContentEducationContainer'>
        <ShowEducation componentCount={componentCount} />
      </section>

      <section className='mainContentExperienceContainer'>
        <ShowExperience componentCount={componentCount} />
      </section>
    </div>
  )
}

// class MainContent extends Component {
//   render() {
//     const { generalInfo, componentCount } = this.props
//     return (
//       <div className='mainContent'>
//         <section className='mainContentDescriptionContainer'>
//           <ShowGeneralInfo generalInfo={generalInfo} />
//         </section>

//         <section className='mainContentEducationContainer'>
//           <ShowEducation componentCount={componentCount} />
//         </section>

//         <section className='mainContentExperienceContainer'>
//           <ShowExperience componentCount={componentCount} />
//         </section>
//       </div>
//     )
//   }
// }

export default MainContent
