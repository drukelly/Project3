import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
// this also works with react-router-native

const Button = styled.button`
background: transparent;
border: none;
cursor: pointer;
padding: 0;
margin: 0;
`

const Image = styled.img`
display: block;
height: 32px;
margin: 0 auto .5rem;
width: 32px;
`

class LogoutButton extends Component {
  goToLogin = props => {
    sessionStorage.clear()
    this.props.history.push('/login')
    window.location.reload()
  }
  render () {
    return (
      <Button className='f7 input-reset link tc white'
        onClick={this.goToLogin}>
        <Image src={this.props.image} alt={this.props.label} />
        {this.props.label}
      </Button>
    )
  }
}

export default withRouter(LogoutButton)
