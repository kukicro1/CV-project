import React, { Component } from 'react'

class Experience extends Component {
  render() {
    const { addExperienceHandler, componentCount } = this.props
    return (
      <div className='experienceContainer'>
        <h1>Previous Experience:</h1>
        {componentCount.experienceFormComponents}
        <button onClick={addExperienceHandler}>Add</button>
      </div>
    )
  }
}

export default Experience
