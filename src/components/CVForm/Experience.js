import React, { Component } from 'react'

class Experience extends Component {
  render() {
    const { handleInput } = this.props
    return (
      <div className='experienceContainer'>
        <h1>Previous Experience:</h1>
        <form>
          <input
            type='text'
            placeholder='Company'
            name='company'
            onChange={handleInput}
          />
          <input
            type='text'
            placeholder='Position'
            name='position'
            onChange={handleInput}
          />
          <input
            type='number'
            placeholder='From'
            name='from'
            onChange={handleInput}
          />
          <input
            type='number'
            placeholder='To'
            name='to'
            onChange={handleInput}
          />
          <button type='submit'>Add</button>
          <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}

export default Experience
