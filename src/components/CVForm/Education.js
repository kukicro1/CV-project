import React, { Component } from 'react'

class Education extends Component {
  render() {
    const { addEducationHandler, componentCount } = this.props
    return (
      <div className='educationContainer'>
        <h1>Education:</h1>
        {componentCount.educationFormComponents}
        <button onClick={addEducationHandler}>Add</button>
      </div>
    )
  }
}

export default Education
