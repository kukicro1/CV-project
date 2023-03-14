import React, { Component } from 'react'

class InputExperience extends Component {
  render() {
    const { handleExperienceInput, onDelete, id } = this.props
    return (
      <form>
        <input
          type='text'
          placeholder='Company'
          name='company'
          onChange={(e) => handleExperienceInput(e, id)}
        />
        <input
          type='text'
          placeholder='Position'
          name='position'
          onChange={(e) => handleExperienceInput(e, id)}
        />
        <input
          type='number'
          placeholder='From'
          name='from'
          onChange={(e) => handleExperienceInput(e, id)}
        />
        <input
          type='number'
          placeholder='To'
          name='to'
          onChange={(e) => handleExperienceInput(e, id)}
        />
        <button type='submit' onClick={(e) => onDelete(e, id)}>
          Delete
        </button>
      </form>
    )
  }
}

export default InputExperience
