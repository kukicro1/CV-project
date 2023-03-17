import React from 'react'

const Education = ({ addEducationHandler, componentCount }) => {
  return (
    <div className='educationContainer'>
      <h1>Education:</h1>
      {componentCount.educationFormComponents}
      <button onClick={addEducationHandler}>Add</button>
    </div>
  )
}

// class Education extends Component {
//   render() {
//     const { addEducationHandler, componentCount } = this.props
//     return (
//       <div className='educationContainer'>
//         <h1>Education:</h1>
//         {componentCount.educationFormComponents}
//         <button onClick={addEducationHandler}>Add</button>
//       </div>
//     )
//   }
// }

export default Education
