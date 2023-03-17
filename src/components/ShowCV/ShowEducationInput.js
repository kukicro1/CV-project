import React from 'react'

const ShowEducationInput = ({ education }) => {
  return (
    <div>
      <p>{education.university}</p>
      <p>{education.degree}</p>
      <p>{education.generation}</p>
      <p>{education.subject}</p>
    </div>
  )
}

// class ShowEducationInput extends Component {
//   render() {
//     const { education } = this.props
//     return (
//       <div>
//         <p>{education.university}</p>
//         <p>{education.degree}</p>
//         <p>{education.generation}</p>
//         <p>{education.subject}</p>
//       </div>
//     )
//   }
// }

export default ShowEducationInput
