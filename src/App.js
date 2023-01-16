import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'

export default class App extends Component {
  state = {
    title: "Daisyyy"
  }

  render() {
    return (
      <div className="p-4">
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
      </div>
    )
  }
}
