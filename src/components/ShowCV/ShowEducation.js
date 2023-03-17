import React from 'react'

const ShowEducation = ({ componentCount }) => {
  return (
    <div className='educationContainerDiv'>
      <h1>Education</h1>
      {componentCount.showEducationComponents}
    </div>
  )
}

// class ShowEducation extends Component {
//   render() {
//     const { componentCount } = this.props
//     return (
//       <div className='educationContainerDiv'>
//         <h1>Education</h1>
//         {componentCount.showEducationComponents}
//       </div>
//     )
//   }
// }

export default ShowEducation
