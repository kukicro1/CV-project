import React, { Component } from 'react'

class Education extends Component {
  render() {
    return (
      <div className='educationContainer'>
        <h1>Education:</h1>
        <form>
          <input type='text' placeholder='University' />
          <input type='text' placeholder='Degree' />
          <input type='text' placeholder='Generation' />
          <input type='text' placeholder='Subject' />
          <button type='submit'>Add</button>
          <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}

export default Education
