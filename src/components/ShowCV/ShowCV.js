import React, { Component } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import PersonalDetails from './PersonalDetails'

class ShowCV extends Component {
  render() {
    return (
      <div className='showCV'>
        <Header generalInfo={this.props.generalInfo} />
        <div className='CVContainer'>
          <MainContent />
          <PersonalDetails />
        </div>
      </div>
    )
  }
}

export default ShowCV
