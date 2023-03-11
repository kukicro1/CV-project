import React, { Component } from 'react'

class GeneralInfo extends Component {
  render() {
    return (
      <div className='generalInfoContainer'>
        <h1>General Info:</h1>
        <form action=''>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='email' placeholder='Email' />
          <input type='number' placeholder='Phone Number' />
          <textarea placeholder='Write more about yourself.'></textarea>
        </form>
      </div>
    )
  }
}

export default GeneralInfo
