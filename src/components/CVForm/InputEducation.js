import React from 'react'

const InputEducation = ({ handleEducationInput, onDelete, id }) => {
  return (
    <form>
      <input
        type='text'
        placeholder='University'
        name='university'
        onChange={(e) => handleEducationInput(e, id)}
      />
      <input
        type='text'
        placeholder='Degree'
        name='degree'
        onChange={(e) => handleEducationInput(e, id)}
      />
      <input
        type='text'
        placeholder='Generation'
        name='generation'
        onChange={(e) => handleEducationInput(e, id)}
      />
      <input
        type='text'
        placeholder='Subject'
        name='subject'
        onChange={(e) => handleEducationInput(e, id)}
      />
      <button type='submit' onClick={(e) => onDelete(e, id)}>
        Delete
      </button>
    </form>
  )
}

// class InputEducation extends Component {
//   render() {
//     return (
//       <form>
//         <input
//           type='text'
//           placeholder='University'
//           name='university'
//           onChange={(e) => handleEducationInput(e, id)}
//         />
//         <input
//           type='text'
//           placeholder='Degree'
//           name='degree'
//           onChange={(e) => handleEducationInput(e, id)}
//         />
//         <input
//           type='text'
//           placeholder='Generation'
//           name='generation'
//           onChange={(e) => handleEducationInput(e, id)}
//         />
//         <input
//           type='text'
//           placeholder='Subject'
//           name='subject'
//           onChange={(e) => handleEducationInput(e, id)}
//         />
//         <button type='submit' onClick={(e) => onDelete(e, id)}>
//           Delete
//         </button>
//       </form>
//     )
//   }
// }

export default InputEducation
