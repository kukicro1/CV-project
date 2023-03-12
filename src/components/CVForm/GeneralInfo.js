import React, { Component } from 'react'

class GeneralInfo extends Component {
  render() {
    const { handleInput } = this.props
    return (
      <div className='generalInfoContainer'>
        <h1>General Info:</h1>
        <form action=''>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            onChange={handleInput}
          />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            onChange={handleInput}
          />
          <input type='email' placeholder='Email' />
          <input type='number' placeholder='Phone Number' />
          <textarea placeholder='Write more about yourself.'></textarea>
        </form>
      </div>
    )
  }
}

export default GeneralInfo