import React from 'react'

const ShowExperience = ({ componentCount }) => {
  return (
    <div className='experienceContainerDiv'>
      <h1>Experience</h1>
      {componentCount.showExperienceComponents}
    </div>
  )
}

// class ShowExperience extends Component {
//   render() {
//     const { componentCount } = this.props
//     return (
//       <div className='experienceContainerDiv'>
//         <h1>Experience</h1>
//         {componentCount.showExperienceComponents}
//       </div>
//     )
//   }
// }

export default ShowExperience
