import React, { Component } from 'react'

class PersonalDetails extends Component {
  render() {
    return (
      <div className='personalDetailsContainer'>
        <img
          src={require('/home/kuki/Desktop/odin/odin/cv-project/src/images/profile-picture.jpg')}
          alt='Profile'
        />
        <section className='personalDetailsSection'>
          <h2>Personal Details</h2>
          <div>
            <section className='personalDetails address'>
              <h3>Address</h3>
              <p>Vedra nebesa</p>
            </section>

            <section className='personalDetails phoneNumber'>
              <h3>Phone number</h3>
              <p>099999999999</p>
            </section>

            <section className='personalDetails email'>
              <h3>Email</h3>
              <p>kruno@gmail.com</p>
            </section>
          </div>
        </section>
      </div>
    )
  }
}

export default PersonalDetails
