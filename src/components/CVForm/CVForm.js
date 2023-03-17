import React from 'react'
import Education from './Education'
import Experience from './Experience'
import GeneralInfo from './GeneralInfo'

const CVForm = ({
  handleInput,
  addExperienceHandler,
  addEducationHandler,
  handleLoad,
  handleReset,
  componentCount,
}) => {
  return (
    <div className='CVform'>
      <GeneralInfo handleInput={handleInput} />
      <Education
        addEducationHandler={addEducationHandler}
        componentCount={componentCount}
      />
      <Experience
        componentCount={componentCount}
        addExperienceHandler={addExperienceHandler}
      />
      <div className='commandButtons'>
        <button onClick={handleLoad}>Load Example</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

// class CVForm extends Component {
//   render() {
//     const {
//       handleInput,
//       addExperienceHandler,
//       addEducationHandler,
//       handleLoad,
//       handleReset,
//       componentCount,
//     } = this.props
//     return (
//       <div className='CVform'>
//         <GeneralInfo handleInput={handleInput} />
//         <Education
//           addEducationHandler={addEducationHandler}
//           componentCount={componentCount}
//         />
//         <Experience
//           componentCount={componentCount}
//           addExperienceHandler={addExperienceHandler}
//         />
//         <div className='commandButtons'>
//           <button onClick={handleLoad}>Load Example</button>
//           <button onClick={handleReset}>Reset</button>
//         </div>
//       </div>
//     )
//   }
// }

export default CVForm
