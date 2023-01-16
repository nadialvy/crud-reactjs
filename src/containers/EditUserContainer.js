import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'

export default class EditUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <div>EditUserContainer</div>
      </Container>
    )
  }
}
