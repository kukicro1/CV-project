import React, { Component } from 'react'

class Education extends Component {
  render() {
    const { handleInput } = this.props
    return (
      <div className='educationContainer'>
        <h1>Education:</h1>
        <form>
          <input
            type='text'
            placeholder='University'
            name='university'
            onChange={handleInput}
          />
          <input
            type='text'
            placeholder='Degree'
            name='degree'
            onChange={handleInput}
          />
          <input
            type='text'
            placeholder='Generation'
            name='generation'
            onChange={handleInput}
          />
          <input
            type='text'
            placeholder='Subject'
            name='subject'
            onChange={handleInput}
          />
          <button type='submit'>Add</button>
          <button type='submit'>Delete</button>
        </form>
      </div>
    )
  }
}

export default Education
