import React from 'react'

const ShowExperienceInput = ({ experience }) => {
  return (
    <div>
      <p>{experience.company}</p>
      <p>{experience.position}</p>
      <p>{experience.from}</p>
      <p>{experience.to}</p>
    </div>
  )
}

// class ShowExperienceInput extends Component {
//   render() {
//     const { experience } = this.props
//     return (
//       <div>
//         <p>{experience.company}</p>
//         <p>{experience.position}</p>
//         <p>{experience.from}</p>
//         <p>{experience.to}</p>
//       </div>
//     )
//   }
// }

export default ShowExperienceInput
