import React from 'react'

const PersonalDetails = ({ generalInfo }) => {
  return (
    <div className='personalDetailsContainer'>
      <img
        src={require('/home/kuki/Desktop/odin/odin/cv-project/src/images/profile-picture.jpg')}
        alt='Profile'
      />
      <section className='personalDetailsSection'>
        <h2>Personal Details</h2>
        <div>
          <section className='personalDetails phoneNumber'>
            <h3>Phone number</h3>
            <p>{generalInfo.phoneNumber}</p>
          </section>

          <section className='personalDetails email'>
            <h3>Email</h3>
            <p>{generalInfo.email}</p>
          </section>
        </div>
      </section>
    </div>
  )
}

// class PersonalDetails extends Component {
//   render() {
//     const { generalInfo } = this.props
//     return (
//       <div className='personalDetailsContainer'>
//         <img
//           src={require('/home/kuki/Desktop/odin/odin/cv-project/src/images/profile-picture.jpg')}
//           alt='Profile'
//         />
//         <section className='personalDetailsSection'>
//           <h2>Personal Details</h2>
//           <div>
//             <section className='personalDetails phoneNumber'>
//               <h3>Phone number</h3>
//               <p>{generalInfo.phoneNumber}</p>
//             </section>

//             <section className='personalDetails email'>
//               <h3>Email</h3>
//               <p>{generalInfo.email}</p>
//             </section>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }

export default PersonalDetails
