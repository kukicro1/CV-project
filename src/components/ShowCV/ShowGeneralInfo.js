import React from 'react'

const ShowGeneralInfo = ({ generalInfo }) => {
  return (
    <div className='descriptionContainerDiv'>
      <h1>Personal info</h1>
      <div>{generalInfo.personalInfo}</div>
    </div>
  )
}

// class ShowGeneralInfo extends Component {
//   render() {
//     const { generalInfo } = this.props
//     return (
//       <div className='descriptionContainerDiv'>
//         <h1>Personal info</h1>
//         <div>{generalInfo.personalInfo}</div>
//       </div>
//     )
//   }
// }

export default ShowGeneralInfo
