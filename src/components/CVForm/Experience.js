import React from 'react'

const Experience = ({ addExperienceHandler, componentCount }) => {
  return (
    <div className='experienceContainer'>
      <h1>Previous Experience:</h1>
      {componentCount.experienceFormComponents}
      <button onClick={addExperienceHandler}>Add</button>
    </div>
  )
}

// class Experience extends Component {
//   render() {
//     const {  } = this.props
//     return (
//       <div className='experienceContainer'>
//         <h1>Previous Experience:</h1>
//         {componentCount.experienceFormComponents}
//         <button onClick={addExperienceHandler}>Add</button>
//       </div>
//     )
//   }
// }

export default Experience
