import React, { Component } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Navigation from './components/NavigationBar'

class App extends Component {
  render() {
    return (
      <>
        <Navigation></Navigation>
        <Main></Main>
        <Footer></Footer>
      </>
    )
  }
}

export default App
