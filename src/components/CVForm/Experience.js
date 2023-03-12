import React, { Component } from 'react'

class Experience extends Component {
  render() {
    return (
      <div className='experienceContainer'>
        <h1>Previous Experience:</h1>
        <form>
          <input type='text' placeholder='Company' />
          <input type='text' placeholder='Position' />
          <input type='number' placeholder='From' />
          <input type='number' placeholder='To' />
          <button type='submit'>Add</button>
          <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}

export default Experience
